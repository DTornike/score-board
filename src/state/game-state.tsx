import { createContext, ReactNode, useContext, useState } from "react";
import { Player } from "../models";

export enum PLAYERS {
  PLAYER_ONE,
  PLAYER_TWO,
}

const initialPlayers: Player[] = [
  { name: "Player 1", imgUrl: "url1", stats: { score: 0, set: 0 } },
  { name: "Player 2", imgUrl: "url2", stats: { score: 0, set: 0 } },
];

const GameStateContext = createContext<
  | {
      players: Player[];
      updateScore: (playerIndex: number, newScore: number) => void;
      updatePlayerName: (playerIndex: number, name: string) => void;
      updatePlayerImageUrl: (playerIndex: number, newImageUrl: string) => void;
    }
  | undefined
>(undefined);

type TGameState = {
  children: ReactNode;
};

const GameStateProvider = ({ children }: TGameState) => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const updateScore = (playerIndex: number, newScore: number) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerIndex] = {
        ...updatedPlayers[playerIndex],
        stats: {
          ...updatedPlayers[playerIndex].stats,
          score: newScore,
        },
      };

      const playerScore = updatedPlayers[playerIndex].stats?.score || 0;
      const opponentIndex = playerIndex === 0 ? 1 : 0;
      const opponentScore = updatedPlayers[opponentIndex].stats?.score || 0;

      if (playerScore >= 11 && playerScore - opponentScore >= 2) {
        updatedPlayers[playerIndex] = {
          ...updatedPlayers[playerIndex],
          stats: {
            ...updatedPlayers[playerIndex].stats,
            set: updatedPlayers[playerIndex].stats?.set + 1 || 1,
            score: 0,
          },
        };

        updatedPlayers[opponentIndex] = {
          ...updatedPlayers[opponentIndex],
          stats: {
            ...updatedPlayers[opponentIndex].stats,
            score: 0,
          },
        };
      }

      if (
        playerScore === 10 &&
        opponentScore === 10 &&
        playerScore - opponentScore === 0
      ) {
        updatedPlayers[playerIndex] = {
          ...updatedPlayers[playerIndex],
          stats: {
            ...updatedPlayers[playerIndex].stats,
            score: newScore,
          },
        };
      }

      return updatedPlayers;
    });
  };

  const updatePlayerName = (playerIndex: number, newName: string) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerIndex] = {
        ...updatedPlayers[playerIndex],
        name: newName,
      };
      return updatedPlayers;
    });
  };

  const updatePlayerImageUrl = (playerIndex: number, newImageUrl: string) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerIndex] = {
        ...updatedPlayers[playerIndex],
        imgUrl: newImageUrl,
      };
      return updatedPlayers;
    });
  };

  return (
    <GameStateContext.Provider
      value={{ players, updateScore, updatePlayerName, updatePlayerImageUrl }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
};

export { GameStateProvider, useGameState };
