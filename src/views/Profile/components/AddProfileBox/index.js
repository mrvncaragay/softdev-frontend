import React from 'react';

// Material UI components
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '500px',
    height: '100px',
    marginTop: theme.spacing(8),
    backgroundColor: 'white',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.border}`,
    cursor: 'pointer',
    '&:hover h4, &:hover button': {
      color: theme.palette.background.default
    }
  },

  fab: {
    boxShadow: 'none',
    marginRight: theme.spacing(2),
    backgroundColor: 'white',
    color: theme.palette.text.main
  }
}));

const AddProfileBox = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Fab
        color='default'
        size='small'
        aria-label='add'
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <Typography variant='h4'>Add profile</Typography>
    </div>
  );
};

export default AddProfileBox;
