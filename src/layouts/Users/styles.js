import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(4),
    padding: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      width: '90%',
      padding: theme.spacing(0)
    }
  },

  paginate: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      padding: theme.spacing(1.5, 3, 1.5, 3),

      '&:last-child': {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      }
    },
    '& .Mui-disabled': {
      border: 'none'
    }
  }
}));
