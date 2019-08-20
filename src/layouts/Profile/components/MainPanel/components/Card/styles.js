import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    borderTop: `1px solid ${theme.palette.border}`
  },

  title: {
    borderBottom: `1px solid ${theme.palette.border}`,
    borderLeft: `1px solid ${theme.palette.border}`,
    borderRight: `1px solid ${theme.palette.border}`,
    padding: theme.spacing(4, 4, 2, 4),
    backgroundColor: theme.palette.common.white
  }
}));
