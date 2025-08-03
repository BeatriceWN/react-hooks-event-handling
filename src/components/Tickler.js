import React from "react";

//good if you have more than one line of code to run in your event handler,
// function Tickler() {
//   function tickle() {
//     console.log("Teehee!");
//   }

//   return <button onClick={tickle}>Tickle me!</button>;
// }

//-------------------------------------//

//use an arrow function to define an event handler inline, and pass it to the event listener:
// good choice if your event handler doesn't need to handle much logic
function Tickler() {
  return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
}

export default Tickler;
