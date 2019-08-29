import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      order: 0
    }
  },

  pagination: {
    '& button': {
      padding: theme.spacing(2, 3, 2, 3),

      '&:last-child': {
        marginLeft: theme.spacing(2)
      }
    }
  }
}));
