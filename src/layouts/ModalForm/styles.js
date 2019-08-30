import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  title: {
    padding: theme.spacing(1, 3, 3, 3)
  },

  dialogForm: {
    '& .MuiDialog-paper': {
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(2),
        maxWidth: 'none'
      }
    }
  },

  closeBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    '& button': {
      padding: theme.spacing(0)
    }
  }
}));
