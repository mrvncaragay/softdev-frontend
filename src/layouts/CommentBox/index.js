import React from 'react';
import { Link } from 'react-router-dom';

// External
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import Comment from '@material-ui/icons/CommentOutlined';

// Component styles
import styles from './styles';

const CommentBox = () => {
  const classes = styles();

  return <div className={classes.root}>Comment Box</div>;
};

export default CommentBox;
