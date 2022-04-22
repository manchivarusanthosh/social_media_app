import React from "react";
import "./SideBar.css";

const SideBar = () => {
  const listItems = [
    { iconText: "Feed", icon: "feed" },
    { iconText: "Chats", icon: "comment" },
    { iconText: "Videos", icon: "video" },
    { iconText: "Groups", icon: "user-friends" },
    { iconText: "Bookmarks", icon: "bookmark" },
    { iconText: "Questions", icon: "feed" },
    { iconText: "Jobs", icon: "question-circle" },
    { iconText: "Events", icon: "calendar" },
    { iconText: "Courses", icon: "graduation-cap" },
  ];

  const friendsList = [
    "John Doe",
    "Sachin",
    "Virat",
    "Raina",
    "Yuvraj",
    "Sehwag",
    "Pollard",
    "Gayle",
    "Yuvraj",
    "Sehwag",
    "Pollard",
    "Gayle",
  ];
  return (
    <div className="side-bar">
      <div className="side-bar-wrapper">
        <ul className="side-bar-list">
          {listItems.map((eachItem) => {
            return (
              <li className="side-bar-item">
                <i className={`fa fa-${eachItem.icon}`}></i>
                <span className="side-bar-item-text">{eachItem.iconText}</span>
              </li>
            );
          })}
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friendList">
          {friendsList.map((eachFriend) => {
            return (
              <li className="sidebar-friend">
                <img
                  className="sidebarFriendImg"
                  src="/assets/person/2.jpeg"
                  alt=""
                />
                <span className="sidebarFriendName">{eachFriend}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
