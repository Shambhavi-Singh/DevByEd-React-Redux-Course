// // Learning Props ad events

// import React from "react";
// import TweetList from "./components/TweetList";
// function App() {
//   const name = "Shambhavi";
//   const message = "Hello React!!";
//   const clickHandler = () => {
//     window.alert("Hello");
//   };
//   //How to use parameter in event

//   // const clickHandler = (user) => {
//   //   window.alert(`Hello! ${user}`);
//   // };

//   //the parameter e holds all information like input data etc of the event

//   //const clickHandler=(e)=>{console.log(e)}
//   return (
//     <div>
//       <h1>Twitter</h1>
//       <button onClick={clickHandler}>Submit</button>
//       {/* event envoke with parameter */}
//       {/* <button onClick={() => clickHandler("Shambhavi")}>Submit</button> */}
//       <TweetList name={name} text={message} />
//     </div>
//   );
// }

// export default App;
// ==============================================================================================================================================
// Learning State
import React, { useState } from "react";
import TweetList from "./components/TweetList";
function App() {
  const name = "Shambhavi";
  const message = "Hello React!!";
  const [title, setTitle] = useState("Twitter");
  const clickHandler = () => {
    setTitle("Facebook");
  };
  //How to use parameter in event

  // const clickHandler = (user) => {
  //   window.alert(`Hello! ${user}`);
  // };

  //the parameter e holds all information like input data etc of the event

  //const clickHandler=(e)=>{console.log(e)}
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={clickHandler}>Submit</button>
      {/* event envoke with parameter */}
      {/* <button onClick={() => clickHandler("Shambhavi")}>Submit</button> */}
      <TweetList name={name} text={message} />
    </div>
  );
}

export default App;
