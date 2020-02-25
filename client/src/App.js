import React from "react";
import { Header } from "./components/Header";
import Customers from "./components/customers";
import Queries from "./components/queries";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Customers />
        <Queries />
      </div>
    </GlobalProvider>
  );
}

export default App;
