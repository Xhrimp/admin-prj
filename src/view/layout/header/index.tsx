import headerStyle from './header.module.scss'
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return <>
    <div>
      this is Test of router
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/Login">Login</Link>
      </li>
    </ul>

  </>
}

export default Header
