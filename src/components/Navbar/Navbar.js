import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <div>
      <nav className={props.divName}>
        <span> PUSG</span>
        <ul>
          <li> <Link className={props.divLi} to='/'>Home</Link> </li>
          <li> <Link className={props.divLi} to='/services'>Services</Link> </li>
          <li> <Link className={props.divLi} to='/contact'>Contact</Link> </li>
          <li> <Link className={props.divLi} to='/Gallery'>Gallery</Link> </li>
          <li> <Link className={props.divLi} to='/news'>News</Link> </li>
          <li> <Link className={props.divLi} to='/about'> About</Link> </li>
        </ul>


        <div className='nav-form'>
          <form method='post'>
            <input placeholder='search' required />
            <button type='submit'> Search </button>
          </form>
          <button onClick={props.function} >
            {props.buttonName}
          </button>
        </div>


      </nav>
    </div>
  );
}

export default Navbar;
