import React from "react";
import "./SongRow.scss";
import moment from "moment";
import { getDisplayTime } from "../../../utility/utility";

const SongRow = ({ track }) => {

  return (
    <div className="songRow">
      <img src={track.album.images[0].url} className="songRow__album" alt="" />
      <div className="songRow__info">
        <div>
          <h1>{track.name}</h1>
          <p>{track.artists.map((artist) => artist.name).join(",")}</p>
        </div>
        <div>
          <p>{track.album.name}</p>
        </div>
        <div>
          <p>{moment(track.album.release_date).format("MMM DD,Y")}</p>
        </div>
        <div>{getDisplayTime(track.duration_ms)}</div>
      </div>
    </div>
  );
};

export default SongRow;
