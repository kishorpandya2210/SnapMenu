import React, { Fragment } from 'react';
import logo from '../../assets/logo-tp.png';
import { Link } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const guestLinks = (
    <ul className='nav justify-content-end'>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul className='nav justify-content-end'>
      <li className='nav-item'>
        <Link className='nav-link' to='/dashboard'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' onClick={logout} to='#!'>
          Logout
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <Link className='navbar-brand w-25' to='/'>
        <img src={logo} style={{ height: '60px', width: '70px' }} alt='' />
      </Link>
      {!isAuthenticated ? guestLinks : authLinks}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
