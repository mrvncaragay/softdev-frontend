import React from 'react';
import pagination from '../../hooks/pagination';
import { CSSTransition } from 'react-transition-group';

import { paginateProfiles } from '../../actions';

// External
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';

// Shared component
import { Header, Body } from './components';

// Component styles
import styles from './styles';

const Users = ({ profiles, paginateProfiles }) => {
  const classes = styles();
  const [paginate, handleNextMove] = pagination(
    {
      pageNumber: 1,
      pageSize: 9
    },
    paginateProfiles
  );

  return (
    <div className={classes.root}>
      <Header />

      <CSSTransition classNames='fade' timeout={300}>
        <Body profiles={profiles} />
      </CSSTransition>

      <div className={classes.paginate}>
        <Button
          variant='outlined'
          disabled={paginate.pageNumber <= 1}
          onClick={handleNextMove('Prev')}
        >
          Previous Page
        </Button>
        <Button
          variant='outlined'
          disabled={profiles.length < paginate.pageSize}
          onClick={handleNextMove('Next')}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.info
});

export default connect(
  mapStateToProps,
  { paginateProfiles }
)(Users);
