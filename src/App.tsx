import { Route, Routes } from "react-router-dom";
import ScoreBoard from "./pages/scoreBoard";
import PlayerRegistration from "./pages/playerRegistration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PlayerRegistration />}></Route>
        <Route path="/score_board" element={<ScoreBoard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
