import React from "react";
import { useDataLayerValue } from "../../../context/DataLayer";
import "./Body.scss";
import Header from "./Header";
import PlayCirlceFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const Body = ({ spotify }) => {
  const [{ currentPlaylist }] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={currentPlaylist?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{currentPlaylist?.name}</h2>
          <p>{currentPlaylist?.description}</p>
          <p>
            <span>{currentPlaylist?.owner?.display_name}</span>
            <span className="body__delimiter">|</span>
            <span>{currentPlaylist?.tracks.total} songs</span>
          </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCirlceFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="body__headerRow">
          <span>Title</span>
          <span>Album</span>
          <span>Date Added</span>
          <span>
            <AccessTimeIcon />
          </span>
        </div>
        <hr />
        {currentPlaylist?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;



// const getPlaylistDuration = () => {
//   const duration = getDisplayTime(
//     currentPlaylist?.tracks?.items?.reduce((acc, val) => {
//      return acc + val.track.duration_ms;
//     }, 0)
//   );
//   console.log( currentPlaylist?.tracks?.items?.reduce((acc, val) => {
//     return acc + val.track.duration_ms;
//    }, 0));
//   const splitDuration = duration.split(":");
//   return `${splitDuration[0]} hr ${splitDuration[1]} min`;
// };
