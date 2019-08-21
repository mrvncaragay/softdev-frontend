import React from 'react';

// Material UI component
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Shared Component
import SkillTab from './component/SkillTab';

// Component styles
import styles from './styles';

const InfoCardSkills = ({ title, icon, skills }) => {
  const classes = styles();
  const arrSkills = skills[0].split(',');

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          {icon}

          <p>{title}</p>
        </div>

        {arrSkills.map(skill => (
          <SkillTab key={skill} skill={skill} />
        ))}
      </CardContent>
    </Card>
  );
};

export default InfoCardSkills;
