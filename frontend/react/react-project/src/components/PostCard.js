// TODO: answer here
import React from "react"
import { Route, Routes } from "react-router-dom";
import LDButton from "./LikeDislikeButton"
// import Navbar from "./Navbar"
// import Home from "./routes/Home";
// import Profile from "./Profile";


export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
   return(
     <div aria-label="Post Card">

      <div className="Media">
        <img src={image} alt="media" aria-label="Post Image"/>
      </div>

      <div className="Container">
        <LDButton />
        <div className="caption">
          <div className="left">
            <div aria-label="Post User Name">
              {username}
            </div>
            <div aria-label="Post Caption">
              {caption}
            </div>
            <div aria-label="Post Date">
              {date}
            </div>
          </div>
        </div>
      </div>
     </div>
   )
}
