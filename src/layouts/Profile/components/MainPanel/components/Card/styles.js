import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    border: `1px solid ${theme.palette.border}`,
    marginBottom: theme.spacing(4)
  },

  title: {
    padding: theme.spacing(4, 4, 3, 4),
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white
  }
}));
