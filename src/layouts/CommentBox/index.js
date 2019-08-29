import React from 'react';
import { Link } from 'react-router-dom';
import { deletePostComment } from 'actions';
// External
import moment from 'moment';
import { connect } from 'react-redux';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Delete from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const CommentBox = ({ pid, comment, currentUser, deletePostComment }) => {
  const classes = styles();

  const handleDeleteComment = () => {
    deletePostComment(pid, comment._id);
  };

  return (
    <div className={classes.root}>
      <div className={classes.userAvatar}>
        <Link
          to={{
            pathname: `/user/${comment.user}`,
            state: { uid: comment.user }
          }}
        >
          <Avatar
            alt={comment.name}
            src={comment.avatar}
            className={classes.avatar}
          />
        </Link>
      </div>

      <div className={classes.userComment}>
        <Typography variant='h5'>
          <Link
            to={{
              pathname: `/user/${comment.user}`,
              state: { uid: comment.user }
            }}
          >
            {comment.name}
          </Link>
          <span>{moment(comment.date).fromNow()}</span>
        </Typography>

        <Typography className={classes.userTitle} variant='h6'>
          Software Engineer
        </Typography>

        <Typography variant='h6'>{comment.text}</Typography>
      </div>

      {currentUser.info.id === comment.user && (
        <Button onClick={handleDeleteComment}>
          <Delete />
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { deletePostComment }
)(CommentBox);
