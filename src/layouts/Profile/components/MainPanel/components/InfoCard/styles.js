import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(1, 4, 1, 4),
    borderRight: `1px solid ${theme.palette.border2} !important`,
    borderLeft: `1px solid ${theme.palette.border2} !important`,
    '&:last-child': {
      borderBottom: `1px solid ${theme.palette.border2}  !important`
    }
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
