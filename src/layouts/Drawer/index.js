import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChromeReader from '@material-ui/icons/ChromeReaderModeOutlined';
import Person from '@material-ui/icons/PermIdentityOutlined';
import People from '@material-ui/icons/PeopleOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const Drawer = ({ currentUser, handleLogOut }) => {
  const classes = styles();

  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      {/* <div className={classes.search}>
        <TextField
          id='outlined-search'
          label='Search'
          type='search'
          className={classes.textField}
          margin='normal'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton aria-label='search'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div> */}

      <Divider />

      <List className={classes.lists}>
        <Link to='/developers'>
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant='h5'> Developers</Typography>}
            />
          </ListItem>
        </Link>

        <Link to='/posts'>
          <ListItem button>
            <ListItemIcon>
              <ChromeReader />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant='h5'> Posts</Typography>}
            />
          </ListItem>
        </Link>

        <Link to='/profile/me'>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant='h5'> Profile</Typography>}
            />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <div className={classes.actions}>
        {currentUser.isAuthenticated ? (
          <Button fullWidth='true' variant='outlined' onClick={handleLogOut}>
            Log out
          </Button>
        ) : (
          <Link to='/login'>
            <Button fullWidth='true' variant='outlined'>
              Log in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('right', true)}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
