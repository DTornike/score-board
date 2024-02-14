import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GameStateProvider } from "./state/game-state.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameStateProvider>
  </React.StrictMode>,
);
