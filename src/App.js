import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle"
import { useState } from "react"
import Screen1 from "./components/Screen1"
import Register from "./components/Register"
import Habits from "./components/Habits"
import Context from "./components/Context"

function App() {
  const [userInfo, setUserInfo] = useState({})
  const [token, setToken] = useState("")
  const [show, setShow] = useState("false")
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{userInfo, setUserInfo, token, setToken, show, setShow}}>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
