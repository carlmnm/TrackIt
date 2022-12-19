import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle"
import { useState } from "react"
import Screen1 from "./components/Screen1"
import Register from "./components/Register"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Screen1/>}/>
        <Route path="/cadastro" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
