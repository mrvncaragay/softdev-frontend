// Material UI component
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 5, 1, 5),
    '& h4:first-child': {
      fontSize: '1em',
      marginBottom: theme.spacing(3)
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 2, 1, 2)
    }
  },

  header: {
    display: 'flex',
    alignItems: 'center',

    '& button': {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: theme.palette.background.default
      },

      '&:hover span': {
        color: 'white'
      }
    }
  },

  btnSubmit: {
    backgroundColor: theme.palette.text.main,
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#4e4e4e',
      border: `1px solid ${theme.palette.border}`
    },

    '& span, &:hover span': {
      padding: theme.spacing(1),
      color: 'white'
    }
  },

  btnCancel: {
    margin: theme.spacing(2, 0, 2, 0),

    '& span, &:hover span': {
      padding: theme.spacing(1),
      color: theme.palette.text.main
    }
  },

  optional: {
    margin: theme.spacing(3, 0, 0, 0),
    fontSize: '14px !important'
  },

  url: {
    marginBottom: '0px'
  },

  error: {
    color: 'red',
    margin: theme.spacing(1, 0, 1, 0)
  }
}));
