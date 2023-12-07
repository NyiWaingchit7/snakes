import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
