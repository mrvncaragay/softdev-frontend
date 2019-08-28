import React from 'react';

// Material UI component
import Card from '@material-ui/core/Card';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';

// Shared Component
import EducationTab from './components/EducationTab';

// Component styles
import styles from './styles';
import CardContent from '@material-ui/core/CardContent';

// Shared Components
import { ModalForm, NewEducation } from 'layouts';

const InfoCardEdu = ({ title, icon, education, actions }) => {
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
            <div className={classes.addEducation}>
              <ModalForm CustomButton={iconButton}>
                <NewEducation />
              </ModalForm>
            </div>
          )}
        </div>

        {education.map(edu => (
          <EducationTab key={edu._id} education={edu} />
        ))}
      </CardContent>
    </Card>
  );
};

export default InfoCardEdu;
