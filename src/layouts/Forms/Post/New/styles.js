// Material UI component
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    width: 'auto',
    padding: theme.spacing(1, 5, 1, 5),
    '& h4:first-child': {
      fontSize: '1em',
      marginBottom: theme.spacing(3)
    },

    '& .MuiCheckbox-colorPrimary.Mui-checked': {
      color: theme.palette.background.default
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

  actions: {
    textAlign: 'end',
    marginBottom: theme.spacing(2)
  },

  btnSubmit: {
    backgroundColor: theme.palette.text.main,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(2),

    '&:hover': {
      color: theme.palette.text.main
    },

    '& span, &:hover span': {
      padding: theme.spacing(1)
    }
  },

  error: {
    color: 'red',
    margin: theme.spacing(1, 0, 1, 0)
  },

  input: {
    display: 'none'
  }
}));
