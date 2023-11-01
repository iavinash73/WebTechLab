// import React, { useState, useEffect } from "react";

// function App() {
//   const [joke, setJoke] = useState("");

//   const fetchNewJoke = () => {
//     fetch("https://icanhazdadjoke.com/", {
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(r => r.json())
//       .then(d => setJoke(d.joke));
//   };

//   useEffect(fetchNewJoke, []);

//   return (
//     <div className="App">
//       <p style={{ height: 60 }}>{joke}</p>
//       <button onClick={fetchNewJoke}>New Joke Please!</button>
//     </div>
//   );
// }

// export default App;
