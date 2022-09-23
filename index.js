import React from "react";
import ReactDOM from "react-dom";
// import moment from "moment";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHeart,
//   faComment,
//   faRetweet,
//   faArrowUpFromBracket,
// } from "@fortawesome/free-solid-svg-icons";
// import { FaTwitter } from "react-icons/fa";
import "./index.css";
// import { FiSearch } from "react-icons/fi";
import Navbar from "./Components/Navbar/navbar.jsx";
import Sidebar from "./Components/Sidebar/sidebar.jsx"
import Trends from "./Components/Trends/trends.jsx"
import Hi from "./Components/Main-post/main"



function Page() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-post">
          <Hi
            name="Cristiano Ronaldo"
            pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            postdate="21-Sep-2022"
            postcap="Feliz por estar de volta a casa! 😀🇵🇹🙏🏽"
            postimg="https://pbs.twimg.com/media/FdMQowBXkAMjF50?format=jpg&name=large"
          />
          <Hi
            name="Cristiano Ronaldo"
            pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            postdate="16-Sep-2022"
            postcap="Happy to score and help the team win! 3 important points! 
                Well done lads 👏🏽💪🏽"
            postimg="https://pbs.twimg.com/media/FcuIJqSX0AEnS7y?format=jpg&name=large"
          />
          <Hi
            name="Cristiano Ronaldo"
            pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            postdate="5-Sep-2022"
            postcap="It's always good to be with you! 👏🏽 #alwaystogether"
            postimg="https://pbs.twimg.com/media/Fb5sGlYXEAIMopj?format=jpg&name=medium"
          />
          <Hi
            name="Cristiano Ronaldo"
            pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            postdate="4-Sep-2022"
            postcap="Well done, lads! And a very special thank you to our supporters! 👏🏽
      Let’s go, Devils! 💪🏽"
            postimg="https://pbs.twimg.com/media/Fb1UGZFWYAAYQfc?format=jpg&name=large"
          />
          <Hi
            name="Cristiano Ronaldo"
            pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            postdate="2-Sep-2022"
            postcap="Great victory! 💪🏽 #mufc"
            postimg="https://pbs.twimg.com/media/FbqDV6WXwAAQgKt?format=jpg&name=large"
          />
          <Hi
            name="Cristiano Ronaldo"
            pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            postdate="2-Sep-2022"
            postcap="3 important points! 💪🏽  #mufc"
            postimg="https://pbs.twimg.com/media/FbLqQHWUEAE61zy?format=jpg&name=large"
          />
        </div>
        <div className="trends">
          <Trends />
        </div>
      </div>
    </div>
  );
}


ReactDOM.render(<Page />, document.querySelector("#root"));