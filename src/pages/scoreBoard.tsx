import { useState } from "react";
import { styled } from "styled-components";
import { Layout } from "../components";
import { Button } from "antd";

const Container = styled.div<{ active?: boolean }>`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  height: 20px;
`;

const ScoreCardLine = styled.div`
  width: 100%;
  height: 20px;
  flex-shrink: 0;
`;

const MainScoreCard = styled.div<{ color?: string }>`
  width: 271px;
  height: 298px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${({ color }) => color};
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #404040;
  leading-trim: both;
  text-edge: cap;
  font-size: 180px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  ${ScoreCardLine} {
    background: ${({ color }) => color};
  }
`;

const ScoreCard = styled.div`
  width: 81px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #c3c3c3;
  background: #404040;
  color: #eff1e7;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 200px;
`;

function ScoreBoard() {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOneWin, setPlayerOneWin] = useState(0);
  const [playerTwoWin, setPlayerTwoWin] = useState(0);

  const players = JSON.parse(
    localStorage.getItem("playerRegistrationData") || ""
  );

  const handleIncrement = (params: number) => {
    if (params == 1) {
      setPlayerOneScore(playerOneScore + 1);
    } else {
      setPlayerTwoScore(playerTwoScore + 1);
    }
  };

  return (
    <Layout>
      <div>
        <Container active={undefined}>
          <Wrapper>
            <div style={{ display: "flex", gap: "36px" }}>
              <div>
                <Title />
                <ScoreCard>{playerOneWin}</ScoreCard>
              </div>
              <div>
                <Title>{players?.playerOne?.name}</Title>
                <MainScoreCard color="#77A1CA">
                  <ScoreCardLine /> <div>{playerOneScore}</div>
                </MainScoreCard>
                {/* <Button type="primary" onClick={() => handleIncrement(1)}>
                  +
                </Button> */}
              </div>
            </div>
            <div style={{ display: "flex", gap: "36px" }}>
              <div>
                <Title>{players?.playerTwo?.name}</Title>
                <MainScoreCard color="#A5CA77">
                  <ScoreCardLine />
                  <div>{playerTwoScore}</div>
                </MainScoreCard>
                {/* <Button type="primary" onClick={() => handleIncrement(2)}>
                  +
                </Button> */}
              </div>
              <div>
                <Title />
                <ScoreCard>{playerTwoWin}</ScoreCard>
              </div>
            </div>
          </Wrapper>
        </Container>
      </div>
    </Layout>
  );
}

export default ScoreBoard;
