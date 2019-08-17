import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'actions/userActions';

// Material UI component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Component styles
import styles from './styles';

const Navbar = ({ children, user, logout }) => {
  const classes = styles();
  const { isAuthenticated } = user;

  const handleLogOut = () => logout();
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
              <Typography variant='h5' display='inline'>
                <Link to='/'>developers</Link>
              </Typography>

              <Typography variant='h5' display='inline'>
                <Link to='/'>posts</Link>
              </Typography>
            </div>

            <div className={classes.info}>
              {isAuthenticated ? (
                <Button size='small' onClick={handleLogOut}>
                  log out
                </Button>
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
                  </Button>{' '}
                </Fragment>
              )}
            </div>

            <div className={classes.mobile}>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <main className={classes.content}>{children}</main>
    </Fragment>
  );
};

const myStateToProps = state => ({
  user: state.user
});

export default connect(
  myStateToProps,
  { logout }
)(Navbar);
