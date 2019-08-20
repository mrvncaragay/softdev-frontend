import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    padding: theme.spacing(8),
    // border: `1px solid ${theme.palette.border}`,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: theme.spacing(4),
      display: 'inline-block'
    }
  },

  sidePanel: {
    flex: '0 0 300px',
    height: 'fit-content',
    // padding: theme.spacing(4),
    marginRight: theme.spacing(1),
    // border: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      flex: '1 0 300px',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1)
    }
  },

  mainPanel: {
    flex: '1 0 400px',
    height: 'fit-content',
    marginLeft: theme.spacing(1),
    // padding: theme.spacing(4),
    backgroundColor: 'inherit',
    // border: `1px solid ${theme.palette.border}`,
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(1),
      height: 'inherit'
    }
  }
}));
