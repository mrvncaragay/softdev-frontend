import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '20vh',
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.border}`,
    padding: theme.spacing(0, 8, 0, 8)
  },

  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120
  },

  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: theme.spacing(4)
  },

  name: {
    flex: 1,
    color: 'red'
  },

  bio: {
    flex: 1,
    color: 'red'
  },

  footer: {
    flex: 1,
    display: 'flex',

    color: 'red',

    '& h6': {
      alignSelf: 'flex-end'
    }
  }
}));
