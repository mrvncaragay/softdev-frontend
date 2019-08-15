import React from 'react';
import { Link } from 'react-router-dom';

// Material UI component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Component styles
import styles from './styles';

const Navbar = () => {
  const classes = styles();

  return (
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
            <Button size='small'>Sign in</Button>
            <Button className={classes.signUp} variant='outlined' size='medium'>
              get started
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    // <header className={classes.root}>
    //   <div className={classes.logo}>
    //     <h1>
    //       <a href='/'>softdev hub</a>
    //     </h1>
    //   </div>

    //   <List className={classes.list}>
    //     <ListItem>
    //       <ListItemText primary='Developers' />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemText primary='post' />
    //     </ListItem>
    //   </List>
    //   {/* <ul>
    //       <li>
    //         <a href='/'> developers</a>
    //       </li>
    //       <li>
    //         <a href='/'> post</a>
    //       </li>
    //     </ul> */}

    //   {/* <div className={classes.menu}>
    //     <IconButton className={classes.menuBtn}>
    //       <MenuIcon />
    //     </IconButton>
    //   </div> */}
    // </header>
  );
};

export default Navbar;
