import { useState } from "react";
import { styled } from "styled-components";
import { Input, Layout, Button } from "../components";
import { Player } from "../models";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const RegistrationForm = styled.div`
  display: flex;
  max-width: 892px;
  width: 100%;
  height: 944px;
  border-radius: 5px;
  border: 1px solid rgba(249, 100, 95, 0.3);
  background: rgba(250, 250, 250, 0.8);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 74px;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 110px;
  gap: 16px;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  min-width: 183px;
`;

const Label = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #000;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

function PlayerRegistration() {
  const navigate = useNavigate();

  const [playerOne, setPlayerOne] = useState<Player>({
    name: "",
    imgUrl: "",
  });

  const [playerTwo, setPlayerTwo] = useState<Player>({
    name: "",
    imgUrl: "",
  });

  function handleSubmit() {
    const data = { playerOne, playerTwo };

    localStorage.setItem("playerRegistrationData", JSON.stringify(data));
    navigate("/score_board");
  }

  const arePlayersReady =
    playerOne.name.length > 2 && playerTwo.name.length > 2;

  return (
    <Layout>
      <div>
        <Container>
          <RegistrationForm>
            <InputContainer>
              <InputWrapper>
                <Label>Player 1</Label>
                <Input
                  value={playerOne.name}
                  onChange={(value) => {
                    setPlayerOne({
                      name: value,
                      imgUrl: "",
                    });
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Player 2</Label>
                <Input
                  value={playerTwo.name}
                  onChange={(value) => {
                    setPlayerTwo({
                      name: value,
                      imgUrl: "",
                    });
                  }}
                />
              </InputWrapper>
            </InputContainer>
            <Button onClick={handleSubmit} disabled={!arePlayersReady}>
              დაწყება
            </Button>
          </RegistrationForm>
        </Container>
      </div>
    </Layout>
  );
}

export default PlayerRegistration;
