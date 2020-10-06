import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlayListPlayIcon from "@material-ui/icons/PlaylistPlay";
import { useDataLayerValue } from "../../../context/DataLayer";

const Footer = props => {

  const [{ currentPlaylist }] = useDataLayerValue();
  
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src={currentPlaylist?.tracks?.items[0]?.track.album.images[0].url} alt="" />
        <div className="footer__songInfo">
          <h4>{currentPlaylist?.tracks?.items[0]?.track.name}</h4>
          <p>{currentPlaylist?.tracks?.items[0]?.track.artists[0].name}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlayListPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
