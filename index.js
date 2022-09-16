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
import { FaTwitter } from "react-icons/fa";
import "./index.css";

function Hi(props) {
  return (
    <div className="twitter">
     <div className="post">
        <div className="post-header">
          <img className="profilePhoto" src={props.pfp} alt="Profile Pic" />
          <div>
            <strong>{props.name}</strong>
            <br />
            {moment(props.postdate).fromNow()}
          </div>
        </div>
        <div className="post-cap">{props.postcap}</div>
        <div className="post-img">
          <img className="image" src={props.postimg} alt="Post" />
        </div>
        <div className="post-footer">
          <div className="comment">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="retweet">
          <FontAwesomeIcon icon={faRetweet} />
          </div>
          <div className="heart">
          <FontAwesomeIcon icon={faHeart} title="Like" />
          </div>
          <div className="share">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </div>
        </div>
      </div>
      </div>
      );
}

function Page(){
  return <div className="page">
  <div className="page-header">
    <h1 className="brandName">Twitter</h1>
    <div className="logo"><FaTwitter/></div>
    </div>

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

}

ReactDOM.render(<Page />,document.querySelector("#root")
);