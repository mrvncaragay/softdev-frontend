import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  title: {
    padding: theme.spacing(1, 3, 3, 3)
  },

  closeBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    '& button': {
      padding: theme.spacing(0)
    }
  },

  actions: {
    justifyContent: 'center',
    padding: theme.spacing(0, 5, 5, 5),
    '& span': {
      padding: theme.spacing(1)
    }
  }
}));