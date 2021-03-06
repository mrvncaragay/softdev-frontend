import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2)
    }
  }
}));
