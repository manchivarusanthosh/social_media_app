import React from "react";
import "./SideBar.css";
import { Users } from "../../dummyData";
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
          {Users.map((eachFriend) => {
            return (
              <li className="sidebar-friend">
                <img
                  className="sidebarFriendImg"
                  src={eachFriend.profilePicture}
                  alt=""
                />
                <span className="sidebarFriendName">{eachFriend.username}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
