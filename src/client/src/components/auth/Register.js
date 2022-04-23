import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import registerPicture from '../../assets/register.jpg';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';

//component for register form
const Register = ({ register, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger', 10000);
    } else {
      register({ name, email, password });
    }
  };
  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='mt-4'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-9 col-lg-6 col-xl-5'>
          <img src={registerPicture} className='img-fluid' alt='register' />
        </div>
        <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
          <div className='display-5 mb-5'>Sign Up</div>
          <form onSubmit={e => onSubmit(e)}>
            <div className='form-outline mb-4'>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
                className='form-control form-control-lg'
                placeholder='Enter your name'
                required
              />
              <label className='form-label'>Name</label>
            </div>
            <div className='form-outline mb-4'>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
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
                value={password}
                onChange={e => onChange(e)}
                className='form-control form-control-lg'
                placeholder='Enter password'
                required
              />
              <label className='form-label'>Password</label>
            </div>

            <div className='form-outline mb-3'>
              {password !== password2 &&
                password2.length > 0 &&
                password.length > 0 && (
                  <label className='form-label text-danger'>
                    Password doesn't match
                  </label>
                )}
              <input
                type='password'
                id='confirmPassword'
                name='password2'
                value={password2}
                onChange={e => onChange(e)}
                className='form-control form-control-lg'
                placeholder='Confirm password'
                required
              />
              <label className='form-label'>Confirm Password</label>
            </div>

            <div className='text-center text-lg-start mt-4 pt-2'>
              <button
                type='submit'
                className='btn btn-success btn-lg'
                style={{
                  paddingLeft: '2.5rem',
                  paddingRight: '2.5rem',
                }}
              >
                Register
              </button>
              <p className='small fw-bold mt-2 pt-1 mb-0'>
                Already have an account?{' '}
                <Link to='/' className='link-danger'>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
