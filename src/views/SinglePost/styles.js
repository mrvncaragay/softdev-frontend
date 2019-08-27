import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  '@global': {
    '.fade-appear': {
      opacity: 0,
      zIndex: 1
    },

    '.fade-appear.fade-appear-active': {
      opacity: 1,
      transition: 'opacity 500ms linear'
    },

    '.fade-enter': {
      opacity: '0',
      zIndex: 1
    },

    '.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 500ms linear'
    },

    '.fade-exit': {
      opacity: 1
    },

    '.fade-exit-active': {
      opacity: 0.1,
      transition: 'opacity 500ms linear'
    },

    '.fade-exit-done': {
      opacity: 0
    }
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(8, 25, 8, 25),
    flexDirection: 'column',

    '& a': {
      marginTop: theme.spacing(6),
      width: 'fit-content',

      '& button': {
        padding: theme.spacing(1, 2, 1, 2)
      }
    },

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0),

      '& a': {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2)
      }
    }
  }
}));
