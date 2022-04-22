import React from "react";
import TopBar from "../TopBar/TopBar";
import SideBar from "../sidebar/SideBar";
import Feed from "../feed/Feed";
import RightBar from "../rightbar/RightBar";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                src="assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Harry Potter</h4>
              <span className="profileInfoDesc">Harry</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
