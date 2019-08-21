// Material UI component
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 5, 1, 5),
    '& h4:first-child': {
      fontSize: '1em',
      marginBottom: theme.spacing(3)
    },

    '& .MuiCheckbox-colorPrimary.Mui-checked': {
      color: theme.palette.background.default
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

  error: {
    color: 'red',
    margin: theme.spacing(1, 0, 1, 0)
  }
}));
