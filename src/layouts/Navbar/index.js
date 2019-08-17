import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Material UI component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Component styles
import styles from './styles';

const Navbar = ({ children }) => {
  const classes = styles();

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

export default Navbar;
