import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const ArticleSidebar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/articles">All articles</Link>
          </li>
          <li>
            <Link to="/articles/my-articles">My articles</Link>
          </li>
          <li>
            <Link to="/articles/archived">My archived articles</Link>
          </li>
          <li>
            <Link to="/articles/new">New article</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
