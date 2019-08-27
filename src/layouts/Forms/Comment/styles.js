// Material UI component
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: 'auto',
    padding: theme.spacing(1, 5, 1, 5),

    '& form': {
      flex: 1
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3, 4, 3)
    }
  },

  userAvatar: {
    padding: theme.spacing(1, 2, 2, 0),

    '& img': {
      width: '60px',
      height: '60px'
    },

    [theme.breakpoints.down('md')]: {
      '& a': {
        margin: '0 !important'
      }
    }
  },

  actions: {
    textAlign: 'end'
  },

  btnSubmit: {
    backgroundColor: theme.palette.text.main,
    '&:hover': {
      backgroundColor: '#4e4e4e',
      border: `1px solid ${theme.palette.border}`
    },

    '& span, &:hover span': {
      padding: theme.spacing(1),
      color: 'white'
    }
  },

  btnCancel: {
    marginRight: theme.spacing(1),

    '& span': {
      padding: theme.spacing(1)
    }
  },

  error: {
    color: 'red',
    margin: theme.spacing(1, 0, 1, 0)
  }
}));
