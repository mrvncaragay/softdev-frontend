import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex'
  },

  classicLogin: {
    flex: 1,
    // marginRight: theme.spacing(7),

    '& h6 a': {
      color: 'blue'
    }
  },

  socialMediaLogin: {
    flex: 1,
    textAlign: 'center',
    borderLeft: `1px solid ${theme.palette.border}`
  },

  btnSubmit: {
    marginTop: theme.spacing(2),

    '& span, &:hover span': {
      padding: theme.spacing(1),
      color: theme.palette.text.main
    }
  },

  createAccountLink: {
    textAlign: 'end'
  },

  error: {
    color: 'red',
    marginBottom: theme.spacing(1)
  }
}));
