import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MainPage } from "./pages/MainPage.tsx";
import { TaskProvider } from "./context/TaskContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskProvider>
      <MainPage />
    </TaskProvider>
  </StrictMode>
);
