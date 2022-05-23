import "./App.css"
import React from "react"
// TODO: answer here
import LikeDislikeButton from "./components/LikeDislikeButton"
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import Profile from "./components/Profile"
import UploadForm from "./components/UploadForm"


function App() {
  // TODO: answer here
  return (
    <div aria-label="App">
      <h1 aria-label="App Title">Instagram Clone</h1>
      <div>
        <Navbar />
        <PostCard />
      </div>
      
    </div>
  )
}

export default App
