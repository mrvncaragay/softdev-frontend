import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    borderBottom: 'solid 1px rgba(160, 160, 160, 0.3)'
  },

  toolBar: {
    display: 'flex',
    lineHeight: '4em',
    alignItems: 'center',
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0)
  },

  title: {
    flexBasis: '200px',
    textAlign: 'center',

    '& a': {
      transition: 'color 250ms ease'
    },

    '& a:hover': {
      color: theme.palette.background.default
    }
  },

  linkList: {
    flex: 1,
    paddingLeft: '1.7em',
    borderLeft: 'solid 1px rgba(160, 160, 160, 0.3)',
    '& :first-child': {
      borderLeft: 'none',
      marginLeft: 0,
      paddingLeft: 0
    },

    '& h5': {
      borderLeft: 'solid 1px rgba(160, 160, 160, 0.7)',
      marginLeft: '1em',
      paddingLeft: '1.5em',
      lineHeight: 1
    },

    '& a': {
      transition: 'color 250ms ease'
    },

    '& a:hover': {
      color: theme.palette.background.default
    }
  },

  info: {
    flexBasis: 'auto',
    padding: '0 2.3em 0 2em',
    borderLeft: 'solid 1px rgba(160, 160, 160, 0.3)'
  },

  signUp: {
    marginLeft: '1em'
  }
}));
