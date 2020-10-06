import React from "react";
import "./Player.css";
import "./SideBar/SideBar";
import SideBar from "./SideBar/SideBar";
import Body from './Body/Body';
import Footer from './Footer/Footer';

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar spotify={spotify}/>
        <Body spotify={spotify}/>
      </div>
      <Footer />
    </div>
  );
};

export default Player;
