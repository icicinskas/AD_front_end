import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainContext from "./contex/mainContext";
import { useState } from "react";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./components/Register";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";
import LikesPage from "./pages/LikesPage";
import Likes from "./components/Likes";
import History from "./components/History";
import FilterPage from "./pages/FilterPage";

import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function App() {
  const [openPage, setOpenPage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [image, setImage] = useState([]);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [imgLength, setImgLength] = useState(false);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [gender, setGender] = useState();
  const [age, setAge] = useState();

  const state = {
    socket,
    openPage,
    setOpenPage,
    currentUser,
    setCurrentUser,
    image,
    setImage,
    error,
    setError,
    users,
    setUsers,
    imgLength,
    setImgLength,
    likes,
    setLikes,
    gender,
    setGender,
    age,
    setAge,
    dislikes,
    setDislikes,
  };

  const http = async (url, data) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("http://localhost:4000" + url, options);
    return res.json();
  };

  return (
    <div className="App">
      <mainContext.Provider value={state}>
        <BrowserRouter>
          <Toolbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage http={http} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/likeMe" element={<Likes />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </div>
  );
}

export default App;
