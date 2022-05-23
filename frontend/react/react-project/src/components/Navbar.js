import { useEffect, useState } from "react"
import React from "react"
import { getSession, auth } from "../api/auth"
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCompass, faHeart, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  // TODO: answer here
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})

  const userCheck = async () => {
    const session = await getSession()
    if (session) {
      setIsLogin(true)
      setUser(session.user)
    }
    else{
      setIsLogin(false);
    }
  }

  // useEffect(() => {
  //   userCheck()
  // }, [])

  // const handleLogout = async () => {
  //   await auth.logout()
  //   setIsLogin(false)
  // }

  return (
    <div aria-label="Navbar">
      <div class="navigation">
        <div class="logo" aria-label="App Logo">
          <a class="no-underline" href="/" aria-label="App Title">
            Instagram
          </a>
        </div>
        <div class="navigation-search-container">
        <FontAwesomeIcon xicon={faMagnifyingGlass} />
          <input class="search-field" type="text" placeholder="Search" />
          <div class="search-container">
            <div class="search-container-box">
              <div class="search-results">

              </div>
            </div>
          </div>
        </div>

        <div class="navigation-icons">
          {
            isLogin ? (
              <>
                <div class="navigation-icons-profile">
                  <div class="navigation-icons-profile-image">
                    <img src={user.image} alt="profile" />
                  </div>
                  <div aria-label="Profile" class="navigation-icons-profile-name">
                    {user.name}
                  </div>
                </div>
                {/* <div class="navigation-icons-logout">
                  <button class="navigation-icons-logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </button>
                </div> */}
              </>
            ) : (
              <>
                <div class="navigation-icons-login">
                  <button class="navigation-icons-login-button" aria-label="Login" onClick={() => auth() }>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </button>
                </div>
              </>
            )
          }
          {/* <a href="/" target ="_blank" class="navigation-link">
            <FontAwesomeIcon icon={ faCompass} />
          </a>
          <a class="navigation-link notifica">
            <FontAwesomeIcon icon={ faHeart } />
              <div class="notification-bubble-wrapper">
                <div class="notification-bubble">
                  <span class="notifications-count">99</span>
                </div>
              </div>
          </a>
          <a href="/" class="navigation-link">
            <FontAwesomeIcon icon={ faUserCircle } />
          </a>
          <a href="/" id="signout" class="navigation-link">
            <FontAwesomeIcon icon={ faSignOutAlt} />
          </a> */}
        </div>
      </div>
      <br />
    </div>
  )
}
