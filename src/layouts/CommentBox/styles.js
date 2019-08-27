import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: 'auto',
    padding: theme.spacing(2, 0, 2),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3, 4, 3)
    },

    '& button': {
      marginLeft: 'auto'
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

  userComment: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& span': {
      paddinTop: theme.spacing(1)
    },

    '& h5': {
      marginTop: theme.spacing(1),
      textTransform: 'capitalize',
      fontSize: '16px',
      letterSpacing: '0.1em',

      '& span': {
        marginLeft: theme.spacing(1),
        textTransform: 'lowercase',
        fontSize: '11px',
        color: theme.palette.text.disabled
      },

      [theme.breakpoints.down('md')]: {
        '& a': {
          margin: '0 !important'
        }
      }
    }
  },

  userTitle: { fontSize: ' 10px', marginBottom: '8px' }
}));
