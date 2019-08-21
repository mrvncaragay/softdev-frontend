import React from 'react';

// Material UI component
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const SkillTab = ({ skill }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.skillScore}>
        <Badge className={classes.margin} badgeContent={32} max={999} />
        <Typography variant='body2'>{skill}</Typography>
      </div>

      <div className={classes.likers}>
        <Avatar
          alt='Remy Sharp'
          src='https://placekitten.com/640/360'
          className={classes.avatar}
        />

        <Avatar
          alt='Remy Sharp'
          src='https://baconmockup.com/640/360'
          className={classes.avatar}
        />

        <Avatar
          alt='Remy Sharp'
          src='https://www.placecage.com/640/360'
          className={classes.avatar}
        />

        <Badge badgeContent={32} max={32 - 3} />
      </div>
    </div>
  );
};

export default SkillTab;
