import React from "react";

// const Tweet = (props) => {
//   return (
//     <div>
//       <h2>Name: {props.name} </h2>
//       <h3>{props.text}</h3>
//       <button>Like</button>
//       <button>Share</button>
//       <button>Delete</button>
//     </div>
//   );
// };
const Tweet = ({name,text}) => {
    return (
      <div>
        <h2>Name: {name} </h2>
        <h3>{text}</h3>
        <button>Like</button>
        <button>Share</button>
        <button>Delete</button>
      </div>
    );
  };

export default Tweet;
