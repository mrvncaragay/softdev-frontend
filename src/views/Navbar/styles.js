import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    lineHeight: '4.5em',
    height: '4.5em',
    borderBottom: 'solid 1px rgba(160, 160, 160, 0.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000
  },

  logo: {
    textAlign: 'center',
    padding: '0 2em 0 2em',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      fontSize: '0.5em',
      transition: 'color 0.2s ease'
    },

    '& a:hover': {
      color: '#b93114'
    }
  },

  itemlinks: {
    flex: 2,
    borderLeft: 'solid 1px rgba(160, 160, 160, 0.3)',
    paddingLeft: '1.5em',
    color: '#646464',

    '& ul li': {
      borderLeft: 'solid 1px rgba(160, 160, 160, 0.7)',
      marginLeft: '1em',
      lineHeight: 1
    },

    '& ul li:first-child': {
      borderLeft: 'none',
      marginLeft: 0,
      paddingLeft: 0
    },

    '& a': {
      color: 'inherit',
      marginLeft: '1em',
      paddingLeft: '1em',
      fontFamily: 'Raleway, Helvetica, sans-serif',
      fontSize: '0.8em',
      fontWeight: 300,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      transition: 'color 0.2s ease'
    },

    '& a:hover': {
      color: '#b93114'
    }
  },

  menu: {
    padding: '0 2em 0 2em',
    borderLeft: 'solid 1px rgba(160, 160, 160, 0.3)'
  },

  menuBtn: {
    transition: 'color 0.2s ease',

    '&:hover': {
      color: '#b93114'
    }
  }
}));
