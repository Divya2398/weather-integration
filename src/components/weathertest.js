// import "./App.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment";
// import { Weather } from "./components/Weather";

// export default function App() {
//   const API_URL = "https://api.openweathermap.org/data/2.5";
//   const API_KEY = "**************";
//   const REACT_APP_ICON_URL = "https://openweathermap.org/img/w";
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const weatherData = async () => {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });
//       console.log("lat", lat);
//       await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=APIKEY`
//       )
//         .then((res) => res.json())
//         .then((result) => {
//           setData(result);
//           console.log(result);
//         });
//     };
//     weatherData();
//   }, [lat, long]);

//   return (
//     <div className="App">
//       {typeof data.main != "undefined" ? (
//         <Weather weatherData={data} />
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// }
