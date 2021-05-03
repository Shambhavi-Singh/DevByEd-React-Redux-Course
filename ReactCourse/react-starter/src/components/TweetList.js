import React from "react";
import Tweet from "./Tweet";
const TweetList = ({ name, text }) => {
  return (
    <div className="tweetlist">
      <Tweet name={name} text={text} />
      <Tweet name={name} text={text} />
      <Tweet name={name} text={text} />
      <Tweet name={name} text={text} />
    </div>
  );
};

export default TweetList;
