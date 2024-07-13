import { useEffect, useState } from 'react'
import logo from '../../icons_assets/Logo .svg';
import './nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  }

  return (
    <nav className='navbar'>
        <a href='/'><img src={logo} alt='logo'/></a>

        <a href="#" className="toggle-button" id='toggle-btn' onClick={handleToggleNav}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
      <div className={`navbar-links ${toggleNav ? "active" : ''}`} >
      <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/menu'>Menu</NavLink></li>
            <li><NavLink to='/reserve'>Reservations</NavLink></li>
            <li><NavLink to='/online-order'>Order Online</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav 