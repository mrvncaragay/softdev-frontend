import React from 'react';

// Material UI component
import Card from '@material-ui/core/Card';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';

// Shared Component
import ExperienceTab from './components/ExperienceTab';

// Component styles
import styles from './styles';
import CardContent from '@material-ui/core/CardContent';

// Shared Components
import { ModalForm, NewExperience } from '../../../../../../layouts';

const InfoCardExp = ({ title, icon, experience, actions }) => {
  const classes = styles();

  const iconButton = ({ handleClick }) => {
    const handleOpen = () => {
      handleClick();
    };
    return (
      <AddBoxOutlined className={classes.addButton} onClick={handleOpen} />
    );
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          {icon}
          <p>{title}</p>

          {actions && (
            <div className={classes.addExperience}>
              <ModalForm CustomButton={iconButton}>
                <NewExperience />
              </ModalForm>
            </div>
          )}
        </div>

        {experience.map(exp => (
          <ExperienceTab actions={actions} key={exp._id} experience={exp} />
        ))}
      </CardContent>
    </Card>
  );
};

export default InfoCardExp;
