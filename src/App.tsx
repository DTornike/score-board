import { Route, Routes } from "react-router-dom";
import ScoreBoard from "./pages/ScoreBoard";
import Registration from "./pages/Registration.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/score_board" element={<ScoreBoard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
