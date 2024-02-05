import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About } from "./pages/About";
import UserItems from "./pages/UserItems";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hooks from "./components/Hooks";
import Boxes from "./components/playground/Boxes";
import Tetris from "./components/tetris/Tetris";
import Upload from "./pages/Upload";
import Room from "./components/webRTC demo/Room";

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/userData" element={<UserItems />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
