/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const DashBoard = () => {
  const {isLogged, isLogout} = useContext(AuthContext)
  return (
    <div className="dashBoardContainer">
      <h2 style={{color: 'white', fontFamily: 'verdana'}}>Guille's ECommerce</h2>
      <nav className="dashBoardLinks">
        <div>
          <NavLink to='/' className={({isActive}) => isActive ? 'navLinkActive' : 'navLinkInActive'}>Home</NavLink>
        </div>
        <div>
          <NavLink to='about' className={({isActive}) => isActive ? 'navLinkActive' : 'navLinkInActive'}>About us</NavLink>
        </div>
        <div>
          <NavLink to='cart' className={({isActive}) => isActive ? 'navLinkActive' : 'navLinkInActive'}>Cart</NavLink>
        </div>
        <div>
          <NavLink to='login' className={({isActive}) => isActive ? 'navLinkActive' : 'navLinkInActive'}>Login</NavLink>
        </div>
        <div>
          <button onClick={isLogout} disabled={!isLogged} className={isLogged ? 'buttonLogout' : 'buttonLogoutInactive'}>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default DashBoard