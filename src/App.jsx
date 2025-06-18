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
import RoomPage from "./new webRTC/Room";
import LobbyScreen from "./new webRTC/Lobby";
import { SocketProvider } from "./new webRTC/context/SocketProvider";
import Study from "./components/learning/Study";
import Test from "./pages/Test";
import Blank from "./pages/Blank";
import Problems from "./pages/Problems";
import Editor from "./pages/Editor";
import InvoiceGenerator from "./pages/Invoice";

export const LoginContext = createContext();

function App() {
  // console.log("app rendered..");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/about" element={<About />} />
          <Route path="/userData" element={<UserItems />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lobby" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/learning" element={<Study />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/test" element={<Test />} />
          <Route path="/invoice" element={<InvoiceGenerator />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
