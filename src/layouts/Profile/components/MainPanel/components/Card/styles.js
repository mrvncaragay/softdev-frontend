import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    marginBottom: theme.spacing(4),
    '& .MuiPaper-elevation1': {
      border: 'none'
    }
  },

  title: {
    padding: theme.spacing(4, 4, 3, 4),
    border: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 2, 4, 2)
    }
  }
}));
