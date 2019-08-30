import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(8, 25, 8, 25),
    flexDirection: 'column',

    '& a': {
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
  },

  postActions: {
    marginTop: theme.spacing(2),
    display: 'flex',

    '& a': { marginRight: 'auto' },

    '& button:nth-child(3)': {
      marginLeft: theme.spacing(1)
    }
  }
}));
