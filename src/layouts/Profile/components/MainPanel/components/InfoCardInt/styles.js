import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(1, 4, 1, 4),
    borderRight: `1px solid ${theme.palette.border2} !important`,
    borderLeft: `1px solid ${theme.palette.border2} !important`,
    '&:last-child': {
      borderBottom: `1px solid ${theme.palette.border2}  !important`
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 2, 1, 2)
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
    marginLeft: '46px',
    display: 'flex',
    justifyContent: 'space-between',

    '& button': {
      margin: theme.spacing(2, 0, 2, 0),
      padding: theme.spacing(2, 3, 2, 3),

      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1, 0, 1, 0),
        padding: theme.spacing(1, 2, 1, 2),

        '& .MuiButton-label': {
          fontSize: '10px',

          [theme.breakpoints.down('md')]: {
            fontSize: '8px'
          }
        }
      }
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(2)
    }
  }
}));
