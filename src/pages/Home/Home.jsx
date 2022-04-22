import React from "react";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="home-container">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
