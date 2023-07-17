import { useState } from "react";
import { styled } from "styled-components";
import { Input, Layout } from "./components";
import { Player } from "./models";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Container = styled.div<{ active?: boolean }>`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const RegistrationForm = styled.div`
  display: flex;
  gap: 24px;
`;

function App() {
  const [playerOne, setPlayerOne] = useState<Player>({
    name: "",
    imgUrl: "",
  });

  const [playerTwo, setPlayerTwo] = useState<Player>({
    name: "",
    imgUrl: "",
  });

  const arePlayersReady =
    playerOne.name.length > 2 && playerTwo.name.length > 2;

  return (
    <Layout>
      <div>
        <Container active={undefined}>
          <Title>Table Tennis</Title>
          <RegistrationForm>
            <div>
              <Input
                placeholder="Player 1"
                value={playerOne.name}
                onChange={(e) => {
                  setPlayerOne({
                    name: e.target?.value,
                    imgUrl: "",
                  });
                }}
                prefix={<UserOutlined />}
              />
            </div>
            <div>
              <Input
                value={playerTwo.name}
                onChange={(e) => {
                  setPlayerTwo({
                    name: e.target?.value,
                    imgUrl: "",
                  });
                }}
                placeholder="Player 2"
                prefix={<UserOutlined />}
              />
            </div>
          </RegistrationForm>
          {arePlayersReady && (
            <div>
              {playerOne.name} vs {playerTwo.name}
            </div>
          )}
          <Button type="primary" disabled={!arePlayersReady}>
            დაწყება
          </Button>
        </Container>
      </div>
    </Layout>
  );
}

export default App;
