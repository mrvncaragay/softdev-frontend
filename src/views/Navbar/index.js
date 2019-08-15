import React from 'react';

// Material UI component
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Component styles
import styles from './styles';

const Navbar = () => {
  const classes = styles();

  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <h1>
          <a href='/'>softdev hub</a>
        </h1>
      </div>

      <div className={classes.itemlinks}>
        <ul>
          <li>
            <a href='/'> developers</a>
          </li>
          <li>
            <a href='/'> post</a>
          </li>
        </ul>
      </div>

      <div className={classes.menu}>
        <IconButton className={classes.menuBtn}>
          <MenuIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Navbar;
