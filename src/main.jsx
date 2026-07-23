import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./services/styles/variables.css";
import "./services/styles/reset.css";
import "./services/styles/typography.css";
import "./services/styles/layout.css";
import "./services/styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
