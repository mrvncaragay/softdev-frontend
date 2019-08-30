import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchDevelopersProfile } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI components
import Create from '@material-ui/icons/CreateOutlined';
import Typography from '@material-ui/core/Typography';

// Shared component
import { Navbar, Users as DevelopersLayout } from 'layouts';
import { ModalForm, NewPost, CircularLoading } from 'layouts';

// Component styles
import styles from './styles';

const Users = ({ fetchDevelopersProfile, developers }) => {
  const classes = styles();

  // const button = ({ handleClick }) => {
  //   const handleOpen = () => {
  //     handleClick();
  //   };

  //   return (
  //     <Button
  //       variant='outlined'
  //       className={classes.button}
  //       onClick={handleOpen}
  //     >
  //       <Create className={classes.rightIcon} />
  //       Write
  //     </Button>
  //   );
  // };

  /* eslint-disable */
  useEffect(() => {
    fetchDevelopersProfile()
  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      <div className={classes.root}>
        {developers.isLoading ? (
          <CircularLoading />
        ) : developers.profiles ? (
          <CSSTransition
            classNames='fade'
            in={true}
            appear={true}
            timeout={500}
          >
            <DevelopersLayout profiles={developers.profiles} />
          </CSSTransition>
        ) : (
          <div className={classes.noProfile}>
            <Typography variant='h4'>No Profile has been set up.</Typography>
          </div>
        )}
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  developers: state.developers
});

export default connect(
  mapStateToProps,
  { fetchDevelopersProfile }
)(Users);
