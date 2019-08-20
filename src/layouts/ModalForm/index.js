import React from 'react';

// Material UI component
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/ClearSharp';

// Shared component
import { AddBox } from 'layouts';

// Component Styles
import styles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} />;
});

const ModalForm = ({ children, button = false }) => {
  const classes = styles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {button ? (
        <Button fullWidth={true} variant='outlined' onClick={handleOpen}>
          Edit
        </Button>
      ) : (
        <AddBox title='add profile' handleOpen={handleOpen} />
      )}

      <Dialog
        open={open}
        scroll='body'
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title' className={classes.closeBtn}>
          <IconButton onClick={handleClose}>
            <Clear />
          </IconButton>
        </DialogTitle>

        {children}

        <DialogActions className={classes.actions}>
          <Button fullWidth={true} variant='outlined' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalForm;
