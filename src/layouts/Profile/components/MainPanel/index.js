import React from 'react';

// Material UI component
import Assignment from '@material-ui/icons/Assignment';
import School from '@material-ui/icons/School';
import Work from '@material-ui/icons/Work';
import Skills from '@material-ui/icons/VerifiedUser';
import Interest from '@material-ui/icons/Star';
import Following from '@material-ui/icons/DeviceHub';
import Recomendation from '@material-ui/icons/ThumbUp';

// Shared Component
import { InfoCard, Card } from './components';

// Component Styles
import styles from './styles';

const MainPanel = () => {
  const classes = styles();

  const CustomIcon = ({ ...props }) => {
    return props.type;
  };

  return (
    <div className={classes.root}>
      <Card title='Background'>
        <InfoCard title='Summary' icon={<CustomIcon type={<Assignment />} />} />
        <InfoCard title='Skills' icon={<CustomIcon type={<Skills />} />} />
        <InfoCard title='Experience' icon={<CustomIcon type={<Work />} />} />
        <InfoCard title='Education' icon={<CustomIcon type={<School />} />} />
        <InfoCard title='Interest' icon={<CustomIcon type={<Interest />} />} />
      </Card>

      <Card title='Recommendations'>
        <InfoCard
          title='Recomendation'
          icon={<CustomIcon type={<Recomendation />} />}
        />
      </Card>

      <Card title='Following'>
        <InfoCard title='Interest' icon={<CustomIcon type={<Following />} />} />
      </Card>
    </div>
  );
};

export default MainPanel;
