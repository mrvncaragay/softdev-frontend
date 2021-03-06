import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'actions/userActions';
import history from 'util/history';

// Material UI component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/PermIdentityOutlined';
import ChromeReader from '@material-ui/icons/ChromeReaderModeOutlined';
import Input from '@material-ui/icons/Input';

// Shared Component
import Drawer from '../Drawer';

// Component styles
import styles from './styles';

const Navbar = ({ children, currentUser, logout }) => {
  const classes = styles();
  const { isAuthenticated } = currentUser;

  const handleLogOut = () => {
    logout();
    history.push('/login');
  };
  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position='fixed' color='default' className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.title}>
              <Typography variant='h4'>
                <Link to='/'> softdev hub </Link>
              </Typography>
            </div>

            <div className={classes.linkList}>
              <Fragment>
                <Typography variant='h5' display='inline'>
                  <Link to='/developers'>developers</Link>
                </Typography>

                <Typography variant='h5' display='inline'>
                  <Link to='/posts'>posts</Link>
                </Typography>
              </Fragment>
            </div>

            <div className={classes.info}>
              {isAuthenticated && (
                <Fragment>
                  <NavLink activeClassName={classes.activeLink} to='/posts'>
                    <IconButton>
                      <Tooltip title='Posts' placement='bottom'>
                        <ChromeReader />
                      </Tooltip>
                    </IconButton>
                  </NavLink>

                  <NavLink
                    activeClassName={classes.activeLink}
                    to='/profile/me'
                  >
                    <IconButton>
                      <Tooltip title='Profile' placement='bottom'>
                        <Person />
                      </Tooltip>
                    </IconButton>
                  </NavLink>
                </Fragment>
              )}
            </div>

            <div className={classes.info}>
              {isAuthenticated ? (
                <IconButton onClick={handleLogOut}>
                  <Tooltip title='Logout' placement='bottom'>
                    <Input />
                  </Tooltip>
                </IconButton>
              ) : (
                <Fragment>
                  <Button size='small'>
                    <Link to='/login'>log in</Link>
                  </Button>
                  <Button
                    className={classes.signUp}
                    variant='outlined'
                    size='medium'
                  >
                    <Link to='/signup'>get started</Link>
                  </Button>
                </Fragment>
              )}
            </div>

            <div className={classes.mobile}>
              <Drawer currentUser={currentUser} handleLogOut={handleLogOut} />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <main className={classes.content}>{children}</main>
    </Fragment>
  );
};

const myStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  myStateToProps,
  { logout }
)(Navbar);
