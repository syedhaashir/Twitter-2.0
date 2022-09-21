import React from "react";
import "./sidebar.css"
import { RiHashtag } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";  

export default function Sidebar() {
    return (
        <div className="side">
            <div className="explore">
                <RiHashtag />
                Explore
            </div>
            <div className="settings">    
                <IoMdSettings/>
                Settings
            </div>
        </div>
    );
}