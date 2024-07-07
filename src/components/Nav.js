import { useEffect } from 'react'
import logo from '../icons_assets/Logo .svg'

const Nav = () => {

  useEffect(() => {
    const toggleBtn = document.getElementById('toggle-btn');
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]


    toggleBtn.onclick = () => {
       navbarLinks.classList.toggle('active')
    }
  })

  return (
    <nav className='navbar'>
        <img src={logo} alt='logo'/>

        <a href="#" className="toggle-button" id='toggle-btn'>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
      <div className='navbar-links'>
      <ul>
            <li><a href='/' key='/'>Home</a></li>
            <li><a href='/about' key='/about'>About</a></li>
            <li><a href='/menu' key='/menu'>Menu</a></li>
            <li><a href='/reserve' key='/reserve'>Reservations</a></li>
            <li><a href='/orderonline' key='/orderonline'>Order Online</a></li>
            <li><a href='/login' key='/login'>Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav 