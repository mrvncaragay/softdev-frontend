import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(12),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 2, 2, 2)
    }
  },

  paper: {
    // width: '60%',
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.border}`
  },

  title: {
    flex: 2,
    padding: theme.spacing(5),
    color: theme.palette.text.main,
    borderRight: `1px solid ${theme.palette.border}`,

    '& h3': {
      marginBottom: theme.spacing(2)
    },

    '& h5': {
      fontSize: '11px'
    }
  },

  meta: {
    flex: 1,
    textAlign: 'center',
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),

    '& h4': {
      marginBottom: theme.spacing(2)
    },

    '& h5': {
      fontSize: '11px'
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  body: {
    padding: theme.spacing(5),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    }
  }
}));
