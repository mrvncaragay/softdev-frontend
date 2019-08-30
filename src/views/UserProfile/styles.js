import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(0, 0, 0, 0),
    justifyContent: 'center'
  },

  noProfile: {
    marginTop: theme.spacing(12),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.border}`
  }
}));
