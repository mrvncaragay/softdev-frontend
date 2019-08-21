import React from 'react';

// Material UI component
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const SkillTab = ({ skill, pics, score }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.skillScore}>
        <Badge className={classes.margin} badgeContent={score} max={999} />
        <Typography variant='body2'>{skill}</Typography>
      </div>

      <div className={classes.likers}>
        {pics.map((pic, i) => (
          <Avatar
            key={i}
            alt='Random Pic'
            src={`${pic}`}
            className={classes.avatar}
          />
        ))}

        <Badge badgeContent={score} max={score - 4} />
      </div>
    </div>
  );
};

export default SkillTab;
