import React from "react";
import "./RightBar.css";
import { Users } from "../../dummyData";

const RightBar = ({ profile }) => {
  //HomeRightBar

  // const HomeRightBar = () => {
  //   return (
  //     <>
  //       <div className="birthdayContainer">
  //         <img className="birthdayImg" src="assets/gift.png" alt="" />
  //         <span className="birthdayText">
  //           Harry and <b> 3 others</b> have birthday today
  //         </span>
  //       </div>
  //       <img className="righbarAd" src="assets/ad.png" alt="" />
  //       <h4 className="rightbarTitle">Online Friends</h4>
  //       <ul className="rightbarFriendList">
  //         {Users.map((eachUser) => (
  //           <li className="rightBarFriend" key={eachUser.id}>
  //             <div className="rightbarProfileImgContainer">
  //               <img
  //                 className="rightbarProfileImg"
  //                 src={eachUser.profilePicture}
  //                 alt=""
  //               />
  //               <span className="rightbarOnline"></span>
  //             </div>
  //             <span className="rightbarUsername">{eachUser.username}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {/* <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carted</span>
          </div> */}
          {Users.map((eachUser) => {
            return (
              <div className="rightbarFollowing">
                <img
                  src={eachUser.profilePicture}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">
                  {eachUser.username}
                </span>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default RightBar;
