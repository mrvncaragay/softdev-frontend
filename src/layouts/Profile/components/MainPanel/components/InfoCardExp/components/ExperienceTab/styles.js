import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    height: 'auto',
    marginLeft: theme.spacing(6) - 1,
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },

  eduSections: {
    '& h6': {
      padding: theme.spacing(0.3, 1, 0.2, 0)
    },

    '& h5, ': {
      padding: theme.spacing(0.1, 1, 0.1, 0),
      color: theme.palette.text.primary
    }
  }
}));
