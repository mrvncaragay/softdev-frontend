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

    '.fade-enter.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 500ms linear'
    },

    '.fade-exit': {
      opacity: 1
    },

    '.fade-exit.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms linear'
    },

    '.fade-exit-done': {
      opacity: 0
    }
  },
  root: {
    display: 'flex',
    height: '100vh',
    margin: theme.spacing(0, 0, 0, 0),
    justifyContent: 'center'
  }
}));
