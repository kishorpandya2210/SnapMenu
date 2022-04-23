import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import loginPicture from '../../assets/login.jpg';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

//component for login form
const Login = ({ isAuthenticated, setAlert, login }) => {
  const formData = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(formData.current);
    login(data);
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className='mt-4'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-9 col-lg-6 col-xl-5'>
          <img src={loginPicture} className='img-fluid' alt='loginPicture' />
        </div>
        <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
          <div className='display-5 mb-5'>Sign In</div>
          <form ref={formData} onSubmit={onSubmit}>
            <div className='form-outline mb-4'>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control form-control-lg'
                placeholder='Enter a valid email address'
                required
              />
              <label className='form-label'>Email address</label>
            </div>

            <div className='form-outline mb-3'>
              <input
                type='password'
                id='password'
                name='password'
                className='form-control form-control-lg'
                placeholder='Enter password'
                required
              />
              <label className='form-label'>Password</label>
            </div>

            <div className='text-center text-lg-start mt-4 pt-2'>
              <button
                type='submit'
                className='btn btn-primary btn-lg'
                style={{
                  paddingLeft: '2.5rem',
                  paddingRight: '2.5rem',
                }}
              >
                Login
              </button>
              <p className='small fw-bold mt-2 pt-1 mb-0'>
                Don't have an account?{' '}
                <Link to='/register' className='link-danger'>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
