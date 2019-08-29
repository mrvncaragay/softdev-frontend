import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(0, 3, 3, 3),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
      order: 1
    }
  },

  smallPost: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.border}`,
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: 'inherit',
    padding: theme.spacing(4, 0, 4, 0)
  }
}));
