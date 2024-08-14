import React from "react";
import Home from "./Pages/Homes/Home";
import { Login } from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blockbuster from "./Blockbuster/Blockbuster";
import Player from "./Pages/Player/Player";
import Player1 from "./Player1/Player1";
import Blockbuster1 from "./Blockbuster1/Blockbuster1";
import Search from "./Pages/Search/Search";
import Premium from "./Premium/Premium";
import PaymentForm from "./Payment/Payment";
import Contact from "./Contact/Contact";
import VideoPage from "./Pages/Homes/VideoPage";
import Feedback from "./Feedback/Feedback";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/video" element={<VideoPage/>} />
          <Route path="/movies" element={<Blockbuster />}></Route>
          <Route path="/player/:id"element={<Player/>}/>
          <Route path="/Tvshows"element={<Blockbuster1/>}/>
           <Route path="/player1/:id"element={<Player1/>}/>
           <Route path="/search"element={<Search/>}/>
           <Route path="/Premium"element={<Premium/>}/>
           <Route path="/Feedback"element={<Feedback/>}/>
           <Route path="/Payment"element={<PaymentForm/>}/>
           <Route path="/Support"element={<Contact/>}/>
           
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
