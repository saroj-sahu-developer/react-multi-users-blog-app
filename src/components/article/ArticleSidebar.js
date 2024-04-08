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
            <Link to="/articles/your-articles">Your articles</Link>
          </li>
          <li>
            <Link to="/articles/archived">Your archived articles</Link>
          </li>
          <li>
            <Link to="/articles/new">Create your new article</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
