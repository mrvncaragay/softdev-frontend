import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    height: '50px',
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',

    '& p': {
      marginLeft: theme.spacing(5)
    },

    '& .MuiBadge-badge': {
      fontSize: '1.5em',
      color: theme.palette.text.primary,
      border: '1px solid',
      padding: '8px',
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      letterSpacing: '0em',
      marginBottom: '1px',
      fontFamily: 'monospace',
      fontWeight: '700'
    },

    '& :last-child .MuiBadge-badge': {
      fontSize: '1em',
      height: '30px',
      width: '30px'
    }
  },

  skillScore: {
    display: 'flex',
    alignItems: 'center'
  },

  likers: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: '1',

    '&:last-child span': {
      marginLeft: theme.spacing(3)
    },

    '& .MuiAvatar-root': {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    }
  }
}));
