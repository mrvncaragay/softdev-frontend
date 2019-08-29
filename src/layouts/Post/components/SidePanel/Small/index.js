import React from 'react';
import { Link } from 'react-router-dom';

// External
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const TinyPost = ({ post }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {post.posturl && (
        <div className={classes.image}>
          <img alt={post.subtitle} src={post.posturl} title={post.title} />
        </div>
      )}

      <div className={classes.title}>
        <Link
          to={{
            pathname: `/post/${post._id}`,
            state: { id: post._id }
          }}
        >
          <Typography variant='h4'>{post.title}</Typography>
        </Link>
        <Typography variant='h5'>
          {moment(post.createdAt).format('MMMM DD, YYYY')}
        </Typography>
      </div>
    </div>
  );
};

export default TinyPost;
