import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(4, 4, 1, 4),
    borderRight: `1px solid ${theme.palette.border2} !important`,
    borderLeft: `1px solid ${theme.palette.border2} !important`,
    '&:last-child': {
      borderBottom: `1px solid ${theme.palette.border2}  !important`
    }
  },

  body: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  recommendCard: {
    flex: '0 0 250px',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.border}`
  },

  footer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.border}`,
    paddingTop: theme.spacing(2)
  },

  nameJob: {
    '& h5, span': {
      marginLeft: theme.spacing(1)
    },

    '& span': {
      fontSize: '11px'
    }
  }
}));
