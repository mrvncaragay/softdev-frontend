import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  search: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },

  lists: {
    padding: theme.spacing(6, 0, 6, 0),

    '& .MuiListItem-root': {
      marginTop: theme.spacing(2)
    }
  },

  actions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    '& a': {
      width: '100%'
    },

    '& a button': {
      padding: theme.spacing(2, 3, 2, 3)
    }
  }
}));
