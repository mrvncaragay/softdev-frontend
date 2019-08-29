import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { paginatePost } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';

// Shared component
import Post from './Large';

// Component styles
import styles from './styles';

const MainPanel = ({ largePosts, paginatePost }) => {
  const classes = styles();
  const [paginate, setPaginate] = useState({
    pageNumber: 1,
    pageSize: 5
  });

  const handlePrevPage = () => {
    setPaginate({
      ...paginate,
      pageNumber: --paginate.pageNumber
    });

    paginatePost(paginate.pageNumber, 5);
  };

  const handleNextPage = () => {
    setPaginate({
      ...paginate,
      pageNumber: ++paginate.pageNumber
    });

    paginatePost(paginate.pageNumber, 5);
  };
  console.log(paginate);
  return (
    <div className={classes.root}>
      {/* Render two elements at the same time. One element in and Other out*/}
      <TransitionGroup>
        {largePosts.map(post => (
          <CSSTransition key={post._id} classNames='fade' timeout={300}>
            <Post key={post._id} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div className={classes.pagination}>
        <Button
          variant='outlined'
          disabled={paginate.pageNumber <= 1}
          onClick={handlePrevPage}
        >
          Previous Page
        </Button>
        <Button
          variant='outlined'
          disabled={largePosts.length < paginate.pageSize}
          onClick={handleNextPage}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { paginatePost }
)(MainPanel);
