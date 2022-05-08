import React from "react";
import "./App.css";
import ApplicationContext from "./context";
import { PageLayout } from "./pages";

function App() {
  return (
    <ApplicationContext>
      <PageLayout />
    </ApplicationContext>
  );
}

export default App;
