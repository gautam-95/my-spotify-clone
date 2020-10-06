import React from "react";
import { useDataLayerValue } from "../../../context/DataLayer";
import "./SideBarOption.css";

const SideBarOption = ({ title, Icon, playlistId, spotify }) => {
  const [{ currentPlaylist }, dispatch] = useDataLayerValue();

  let activePlaylist = null;
  if(currentPlaylist?.name === title) {
    activePlaylist = 'activePlaylist';
  }

  const setCurrentPlaylist = () => {
    spotify.getPlaylist(playlistId).then((res) => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        currentPlaylist: res,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p className={activePlaylist} onClick={setCurrentPlaylist}>{title}</p>}
    </div>
  );
};

export default SideBarOption;
