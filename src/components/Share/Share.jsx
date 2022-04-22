import React from "react";
import "./Share.css";
const Share = () => {
  const shareOptions = [
    {
      title: "Photo or Video",
      icon: "photo-film",
      color: "red",
    },
    {
      title: "Tag",
      icon: "tag",
      color: "blue",
    },
    {
      title: "Location",
      icon: "location-pin",
      color: "green",
    },
    {
      title: "Feelings",
      icon: "face-smile",
      color: "gold",
    },
  ];
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="What's on you mind ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            {shareOptions.map((eachOption) => {
              return (
                <div className="shareOption">
                  <i
                    className={`fa-solid fa-${eachOption.icon} `}
                    style={{ color: `${eachOption.color}` }}
                  ></i>
                  <span className="shareOptionText">{eachOption.title}</span>
                </div>
              );
            })}
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
