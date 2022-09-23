import React from "react";
import "./main.css"
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faRetweet,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Hi(props) {
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