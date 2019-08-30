import React from 'react';

// External
import { connect } from 'react-redux';

// Material UI component
import Assignment from '@material-ui/icons/AssignmentOutlined';
import School from '@material-ui/icons/SchoolOutlined';
import Work from '@material-ui/icons/WorkOutline';
import Skills from '@material-ui/icons/VerifiedUserOutlined';
import Interest from '@material-ui/icons/StarBorderOutlined';
import Following from '@material-ui/icons/DeviceHubOutlined';
import Recomendation from '@material-ui/icons/ThumbUpOutlined';

// Shared Component
import {
  InfoCard,
  InfoCardEdu,
  InfoCardSkills,
  InfoCardExp,
  InfoCardInt,
  InfoCardRecom,
  Card
} from './components';

// Component Styles
import styles from './styles';

const MainPanel = ({ profile, currentUser }) => {
  const classes = styles();

  const CustomIcon = ({ ...props }) => {
    return props.type;
  };

  const showCurrentUserActions = () => currentUser.id === profile.user._id;

  return (
    <div className={classes.root}>
      <Card title='Background'>
        <InfoCard
          bio={profile.bio}
          title='Summary'
          icon={<CustomIcon type={<Assignment />} />}
        />

        <InfoCardExp
          actions={showCurrentUserActions()}
          experience={profile.experience}
          title='Experience'
          icon={<CustomIcon type={<Work />} />}
        />

        <InfoCardEdu
          actions={showCurrentUserActions()}
          education={profile.education}
          title='Education'
          icon={<CustomIcon type={<School />} />}
        />

        <InfoCardSkills
          skills={profile.skills}
          title='Skills'
          icon={<CustomIcon type={<Skills />} />}
        />

        <InfoCardInt
          title='Interest'
          icon={<CustomIcon type={<Interest />} />}
        />
      </Card>

      <Card title='Recommendations'>
        <InfoCardRecom
          title='Recomendation'
          icon={<CustomIcon type={<Recomendation />} />}
        />
      </Card>

      {/* <Card title='Following'>
        <InfoCard title='Interest' icon={<CustomIcon type={<Following />} />} />
      </Card> */}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.info
});

export default connect(
  mapStateToProps,
  {}
)(MainPanel);
