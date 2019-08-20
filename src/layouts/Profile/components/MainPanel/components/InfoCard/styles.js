import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(2, 4, 4, 4),
    marginBottom: theme.spacing(4),
    borderTop: `none`,
    borderRight: `1px solid ${theme.palette.border}`,
    borderLeft: `1px solid ${theme.palette.border}`,
    borderBottom: `1px solid ${theme.palette.border}`
  },

  title: {
    fontSize: 14
  }
}));
