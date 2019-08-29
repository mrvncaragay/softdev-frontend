import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2, 0, 2, 0),
    marginBottom: theme.spacing(1),
    borderBottom: `1px solid #e8eaec`,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    },

    '&:last-child': {
      borderBottom: `none`
    }
  },

  title: {
    flex: 1,
    padding: theme.spacing(0, 0, 0, 3),
    '& h4': {
      fontSize: '11px',
      letterSpacing: '0.2em',
      lineHeight: '1.4',
      marginBottom: theme.spacing(1)
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 3)
    }
  },

  image: {
    display: 'block',

    '& img': {
      objectFit: 'cover',
      width: '64px',
      height: '64px'
    }
  }
}));
