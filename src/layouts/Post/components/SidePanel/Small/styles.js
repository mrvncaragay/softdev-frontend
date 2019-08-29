import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.palette.border}`,
    backgroundColor: 'white',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    }
  },

  header: {
    display: 'flex',
    alignItems: 'center'
  },

  title: {
    flex: 3,
    padding: theme.spacing(3, 0, 3, 3),
    '& h4': {
      marginBottom: theme.spacing(1)
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3)
    }
  },

  author: {
    marginRight: theme.spacing(3),

    '& img': {
      width: '60px',
      height: '60px'
    }
  },

  image: {
    display: 'block',

    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '200px'
    }
  }
}));
