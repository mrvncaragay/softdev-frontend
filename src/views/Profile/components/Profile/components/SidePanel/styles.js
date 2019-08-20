import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    border: `1px solid ${theme.palette.border}`
  },

  bigAvatar: {
    width: '120px',
    height: '120px'
  },

  editBtn: {
    alignSelf: 'flex-end'
  },

  info: {
    display: 'block',
    width: '100%',
    marginTop: theme.spacing(2),
    textAlign: 'center',

    '& h3': {
      fontSize: '1.2em',
      fontWeight: '500',
      textTransform: 'initial',
      letterSpacing: '0.05em',
      margin: theme.spacing(0, 0, 1, 0)
    },

    '& h4': {
      fontSize: '0.75em',
      fontWeight: '500',
      textTransform: 'initial',
      letterSpacing: '0.1em',
      color: theme.palette.text.primary,
      marginBottom: '4px'
    },

    '& h5': {
      fontSize: '0.70em',
      fontWeight: '500',
      textTransform: 'initial',
      letterSpacing: '0.1em',
      color: theme.palette.text.secondary
    }
  },

  followBtn: {
    margin: theme.spacing(4, 0, 1, 0)
  },

  stats: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4, 0, 1, 0),
    borderTop: `1px solid ${theme.palette.border}`,
    borderBottom: `1px solid ${theme.palette.border}`,

    '& h3': {
      letterSpacing: '0em',
      fontSize: '1em',
      fontWeight: '500',
      marginBottom: '1px',
      color: theme.palette.text.primary
    },

    '& span': {
      display: 'block'
    }
  },

  followers: {
    flex: 1,
    padding: theme.spacing(1),
    textAlign: 'center'
  },

  following: {
    flex: 1,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRight: `1px solid ${theme.palette.border}`
  }
}));
