import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(0, 3, 3, 3),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
      order: 1
    }
  }
}));
