import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faRetweet,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Hi(props) {
  return (
    <div className="twitter">
     <div className="post">
        <div className="post-header">
          <img className="profilePhoto" src={props.pfp} alt="Profile Pic" />
          <div>
            {props.name}
            <br />
            {moment(props.postdate).fromNow()}
          </div>
        </div>
        <div className="post-cap">{props.postcap}</div>
        <div className="post-img">
          <img className="image" src={props.postimg} alt="Post" />
        </div>
        <div className="post-footer">
          <div>
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div>
          <FontAwesomeIcon icon={faRetweet} />
          </div>
          <div>
          <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </div>
        </div>
      </div>
      </div>
      );
}

function Page(){
  return <div className="page">
    <h1>Twitter</h1>
   


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

}

ReactDOM.render(<Page />,document.querySelector("#root")
);
