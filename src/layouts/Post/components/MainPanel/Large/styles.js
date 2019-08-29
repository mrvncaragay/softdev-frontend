import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.palette.border}`,
    backgroundColor: 'white',
    marginBottom: theme.spacing(6),

    '&:last-child': {
      marginBottom: theme.spacing(3)
    }
  },

  header: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.border}`,

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  title: {
    flex: 3,
    padding: theme.spacing(6),
    borderRight: `1px solid ${theme.palette.border}`,

    '& h2': {
      marginBottom: theme.spacing(3),
      fontSize: theme.spacing(3)
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
      textAlign: 'center',
      border: 'none',

      '& h5': {
        lineHeight: 2
      }
    }
  },

  author: {
    padding: theme.spacing(6),
    flex: 1,
    textAlign: 'end',
    '& h4': {
      fontSize: '11.2px',
      marginBottom: theme.spacing(2),
      marginRight: '5px'
    },

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 2, 4, 2),

      '& h4': {
        marginBottom: theme.spacing(0),
        display: 'inline-flex',
        marginRight: theme.spacing(4)
      },

      '& a': {
        paddingLeft: theme.spacing(4),
        borderLeft: `1px solid ${theme.palette.border}`
      }
    },

    '& img': {
      width: '60px',
      height: '60px'
    },

    '& a': {
      display: 'inline-flex',
      alignItems: 'center'
    },

    '& span': {
      marginRight: theme.spacing(1),
      fontSize: '9.6px',
      textTransform: 'uppercase',
      letterSpacing: '0.25em',
      whiteSpace: 'nowrap',
      paddingBottom: '1px',
      borderBottom: 'dotted 1px rgba(160, 160, 160, 0.65)',

      '&:hover': {
        color: theme.palette.background.default
      }
    }
  },

  img: {
    padding: theme.spacing(6, 6, 3, 6),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 3, 4, 3)
    }
  },

  media: {
    paddingTop: '33.33%'
  },

  text: {
    padding: theme.spacing(3, 6, 3, 6),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 3, 4, 3)
    }
  },

  footer: {
    padding: theme.spacing(3, 6, 6, 6),
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3, 4, 3),
      display: 'inline-flex',
      flexDirection: 'column',

      '& a': {
        order: 1
      }
    },

    '& button': {
      padding: theme.spacing(2, 3, 2, 3)
    }
  },

  stats: {
    flex: 1,
    textAlign: 'end',

    [theme.breakpoints.down('md')]: {
      order: 0
    },

    '& a': {
      margin: theme.spacing(2),
      display: 'inline-flex',
      alignItems: 'center',
      color: '#d2d2d2',

      '&:hover, &:hover span': {
        color: theme.palette.background.default
      },

      '& span': {
        marginLeft: theme.spacing(1),
        color: theme.palette.text.main2
      }
    }
  }
}));
