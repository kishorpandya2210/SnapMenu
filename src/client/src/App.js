import { Fragment, useEffect } from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import Alert from './components/util/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { loadUser } from './actions/auth';
import Navbar from './components/util/Navbar';
import About from './components/pages/About';
import setAuthToken from './utils/setAuthToken';

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
}
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Alert></Alert>
            <Switch>
              <Route exact path='/register' component={withRouter(Register)} />
              <Route exact path='/' component={withRouter(Login)} />
              <Route exact path='/about' component={withRouter(About)} />
              <PrivateRoute
                exact
                path='/dashboard'
                component={withRouter(Dashboard)}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
