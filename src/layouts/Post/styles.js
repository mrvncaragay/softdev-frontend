import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    // backgroundColor: 'white',
    // border: `1px solid ${theme.palette.border}`,
    padding: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
      flexDirection: 'column'
    }
  }
}));
