import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(0, 14, 4, 14),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: theme.spacing(0),
      display: 'inline-block'
    }
  },

  writePost: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(4, 18, 0, 18),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3)
    },

    '& svg': {
      marginRight: theme.spacing(1),
      fontSize: '18px'
    }
  }
}));
