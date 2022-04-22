import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((eachpost) => (
          <Post key={eachpost.id} post={eachpost} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
