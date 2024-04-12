import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./session/LogOutButton";
import { isSignedIn, currentUser } from "../utils/current_user_data";
import { useState } from "react";
import { TopBar, ContentWrapper, Navigation, Greeting } from "../styled_components/HomePage";

const HomePage = () => {
  const [signedIn, setSignedIn] = useState(isSignedIn() && currentUser());

  const logOut = () => {
    localStorage.removeItem('current_user');
    setSignedIn(false);
  }

  return (
    <TopBar>
      <ContentWrapper>
        <Greeting>
          {signedIn ? `Welcome, ${currentUser().name}!` : 'You are not signed in. Please sign in.'}
        </Greeting>
        <Navigation>
          <ul>
            {signedIn ? (
              <>
                <li>
                  <Link to="/articles">See articles</Link>
                </li>
                <li>
                  <LogOutButton handleClick={logOut}>Log out</LogOutButton>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/user/login">Login</Link>
                </li>
                <li>
                  <Link to="/user/register">Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </Navigation>
      </ContentWrapper>
    </TopBar>
  );
};

export default HomePage;
