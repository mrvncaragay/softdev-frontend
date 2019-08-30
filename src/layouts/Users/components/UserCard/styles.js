import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: '1 0 340px',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: theme.spacing(2, 1, 2, 1),
    margin: theme.spacing(0, 2, 2, 0),

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 2, 2, 0)
    },

    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 2, 0)
    }
  },

  user: {
    display: 'flex',
    alignItems: 'center'
  },

  avatar: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },

  userTitle: {
    '& h6': {
      fontSize: '11px',
      letterSpacing: '0.2em'
    },

    '& h6, h5': {
      marginLeft: theme.spacing(1)
    }
  },

  btns: {
    marginLeft: 'auto',

    '& button': {
      transition: 'background-color 200ms ease-in-out'
    },

    '& button:hover': {
      backgroundColor: theme.palette.background.default,

      '& span': {
        color: 'white'
      }
    },

    '& button .MuiButton-label': {
      paddingTop: '4px',
      fontSize: '11px',
      letterSpacing: '0.1em'
    }
  },

  userSkills: {
    display: 'flex',
    marginTop: theme.spacing(2),

    '& h6': {
      backgroundColor: '#f1f1f1',
      padding: theme.spacing(0.5)
    },

    '& h6:first-child': {
      margin: theme.spacing(0, 1, 0, 1)
    }
  }
}));
