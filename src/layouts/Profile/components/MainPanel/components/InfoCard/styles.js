import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(4, 4, 1, 4),
    border: `none`
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),

    '& svg': {
      fontSize: '30px',
      position: 'relative',
      left: '-2px',
      marginRight: theme.spacing(2),
      color: theme.palette.text.main2
    },

    '& p': {
      color: theme.palette.text.main2,
      fontSize: '0.75em',
      letterSpacing: '0.25em',
      fontWeight: 500,
      textTransform: 'uppercase'
    }
  },

  body: {
    marginLeft: '46px'
  }
}));
