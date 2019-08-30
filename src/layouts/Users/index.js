import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { likePost, unlikePost } from 'actions';

// External
import { connect } from 'react-redux';
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import Comment from '@material-ui/icons/CommentOutlined';

// Shared component
import { Header, Body } from './components';

// Component styles
import styles from './styles';

const Users = ({ post, likePost, unlikePost, currentUser }) => {
  const classes = styles();
  // const [open, setOpen] = useState(true);
  // const [like, setLike] = useState(post.likes.includes(currentUser.id));

  // const handleCommentForm = () => setOpen(!open);
  // const handleLike = () => {
  //   setLike(!like);
  //   like ? unlikePost(post._id) : likePost(post._id);
  // };

  return (
    <div className={classes.root}>
      <Header />
      <Body />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.info
});

export default connect(
  mapStateToProps,
  { likePost, unlikePost }
)(Users);
