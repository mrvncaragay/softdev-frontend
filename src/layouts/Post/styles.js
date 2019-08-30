import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(2, 4, 4, 4),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
      flexDirection: 'column'
    }
  }
}));
