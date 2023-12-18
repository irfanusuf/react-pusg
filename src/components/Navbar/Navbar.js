import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {



  




  return (
    <div>
      <nav className={props.divName}>
        <span> PUSG</span>
        <ul>
          <li> <Link className={props.divLi} to='/'>{props.link1}</Link> </li>
          <li> <Link className={props.divLi} to='/services'>{props.link2}</Link> </li>
          <li> <Link className={props.divLi } to='/contact'>{props.link3}</Link> </li>
          <li> <Link className={props.divLi} to='/Gallery'>{props.link4}</Link> </li>
        </ul>



        <form className='nav-form' method='post'>
          <input placeholder='search' required />
          <button type='submit'> Search </button>
        </form>
        <button onClick={props.function} className='btn-dark-mode'>

       {props.buttonName}

        </button>
      </nav>
    </div>
  );
}

export default Navbar;
