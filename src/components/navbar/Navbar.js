import React from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar' >
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="image"  className='logo'/>
<div>
<p className='nav-title'>
  <span  className='home'><Link  to="home" spy={true} smooth={false} offset={0} duration={1000}  >Home</Link></span>
  <span  className='movies'><Link  to="action" spy={true} smooth={true} offset={-100} duration={1000} >Movies</Link></span>
  <span  className='tvShows'><Link  to="tvshows" spy={true} smooth={true} offset={-100} duration={1000} >TV Shows</Link></span>
  <span className='popular'><Link  to="popular" spy={true} smooth={true} offset={-100} duration={1000} >New & Popular</Link></span>
  <span className='myList'><Link  to="myList" spy={true} smooth={true} offset={-100} duration={1000} >MyList</Link></span></p>
</div>
<img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="image"  className='avatar'/>
    </div>
  );
}
export default Navbar;