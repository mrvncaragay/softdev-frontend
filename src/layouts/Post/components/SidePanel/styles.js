import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {}
  }
}));
