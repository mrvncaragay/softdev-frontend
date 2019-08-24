import React from 'react';

// Material UI component
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/ClearSharp';

// Component Styles
import styles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} />;
});

const ModalForm = ({ children, CustomButton, customWith = 'sm' }) => {
  const classes = styles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ChildrenForm = props => {
    return React.cloneElement(children, { ...props });
  };

  return (
    <div>
      {CustomButton && <CustomButton handleClick={handleOpen} />}
      <Dialog
        open={open}
        scroll='body'
        maxWidth={customWith}
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

        <ChildrenForm closeForm={handleClose} />
      </Dialog>
    </div>
  );
};

export default ModalForm;
