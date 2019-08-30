import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(4),
    padding: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      width: '90%',
      padding: theme.spacing(0)
    }
  }
}));
