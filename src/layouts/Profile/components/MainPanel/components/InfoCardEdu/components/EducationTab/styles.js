import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    height: '50px',
    marginLeft: theme.spacing(6) - 1,
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center'
  },

  eduSections: {
    '& h4': {
      letterSpacing: '0.15em',
      margin: theme.spacing(0.3, 0, 0.3, 0)
    }
  },

  edit: {
    height: '100%',
    marginLeft: theme.spacing(1),

    '& svg': {
      fontSize: '18px',
      position: 'relative',
      top: '-4px',
      transition: 'color 300ms ease',

      '&:hover': {
        color: theme.palette.background.default,
        cursor: 'pointer'
      }
    }
  },

  media: {
    marginLeft: 'auto',
    marginRight: theme.spacing(2),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '60px',
    width: '100px'
  }
}));
