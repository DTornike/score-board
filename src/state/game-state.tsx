import { createContext, ReactNode, useContext, useState } from "react";
import { Player } from "../models";

export enum PLAYERS {
  PLAYER_ONE,
  PLAYER_TWO,
}

const GameStateContext = createContext<
  | {
      players: Player[];
      updateScore: (playerIndex: PLAYERS, newScore: number) => void;
      updatePlayerName: (playerIndex: PLAYERS, name: string) => void;
      updatePlayerImage: (playerIndex: PLAYERS, imageUrl: string) => void;
    }
  | undefined
>(undefined);

type TGameState = {
  children: ReactNode;
};

const initialPlayers: Player[] = [
  { name: "Player 1", imgUrl: "", stats: { score: 0, set: 0 } },
  { name: "Player 2", imgUrl: "", stats: { score: 0, set: 0 } },
];

const GameStateProvider = ({ children }: TGameState) => {
  const [players, setPlayers] = useState(initialPlayers);

  const updateScore = (playerIndex: PLAYERS, score: number) => {
    const updatedPlayers = [...players];

    updatedPlayers[playerIndex] = {
      ...updatedPlayers[playerIndex],
      stats: {
        ...updatedPlayers[playerIndex].stats,
        score: score,
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
          set: updatedPlayers[playerIndex].stats.set + 1,
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

    setPlayers(updatedPlayers);
  };

  const updatePlayerName = (playerIndex: PLAYERS, newName: string) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerIndex] = {
        ...updatedPlayers[playerIndex],
        name: newName,
      };
      return updatedPlayers;
    });
  };

  const updatePlayerImage = (playerIndex: PLAYERS, imgUrl: string) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerIndex] = {
        ...updatedPlayers[playerIndex],
        imgUrl: imgUrl,
      };
      return updatedPlayers;
    });
  };

  return (
    <GameStateContext.Provider
      value={{ players, updatePlayerName, updatePlayerImage, updateScore }}
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
