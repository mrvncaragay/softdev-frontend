import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    padding: theme.spacing(8),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(0),
      display: 'inline-block'
    }
  },

  sidePanel: {
    flex: '0 0 300px',
    height: 'fit-content',
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.common.white,

    [theme.breakpoints.up('md')]: {
      flex: '1 0 250px'
    },

    [theme.breakpoints.down('md')]: {
      flex: '1 0 300px',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1)
    }
  },

  mainPanel: {
    flex: 1,
    height: 'fit-content',
    backgroundColor: 'inherit'
  }
}));
