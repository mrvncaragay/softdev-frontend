import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(4, 14, 4, 14),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(0),
      display: 'inline-block'
    }
  }
}));
