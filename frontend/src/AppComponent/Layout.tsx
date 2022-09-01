import { Outlet, Link } from "react-router-dom";
import './components.scss'


export default function Layout(){
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/users/create">New user? Click here!</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}