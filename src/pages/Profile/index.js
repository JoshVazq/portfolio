import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'model/profile';
import { fetchProfile } from 'redux/profile/actions';
import { getProfile } from 'redux/profile/selectors';
import { WorkBlock } from './WorkBlock';
import { EducationBlock } from './EducationBlock';
import { SkillsBlock } from './SkillsBlock';
import { PersonalInfo } from './PersonalInfo';

type Props = {
  profile: Profile,
  fetchProfile: Function
};
export class ProfilePage extends Component<Props> {
  componentWillMount() {
    this.props.fetchProfile('2x03PVsba4qWSom0A8aYMq');
  }

  render() {
    const profile = this.props.profile;
    if (profile) {
      return (
        <div className="flex flex-column gray" /* style={{ maxWidth: '1400px' }} */>
          <PersonalInfo profile={profile} />
          <div className="bg-ecru-white ph3">
            <h2 className="teal tc normal f1 fw1 teal">Experiences</h2>
            <WorkBlock experience={profile.experience} />
            <EducationBlock education={profile.education} />
          </div>
          <SkillsBlock skills={profile.skills} />
        </div>

        /*  <footer className="ph3 bg-teal w3-center w3-margin-top">
           <p>Find me on social media.</p>
           <i className="fa fa-facebook-official w3-hover-opacity"></i>
           <i className="fa fa-instagram w3-hover-opacity"></i>
           <i className="fa fa-snapchat w3-hover-opacity"></i>
           <i className="fa fa-pinterest-p w3-hover-opacity"></i>
           <i className="fa fa-twitter w3-hover-opacity"></i>
           <i className="fa fa-linkedin w3-hover-opacity"></i>
           <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
         </footer> */
      );
    }
    return null;
  }
}
export const mapStateToProps = (state: any) => ({ profile: getProfile(state) });

export default connect(
  mapStateToProps,
  { fetchProfile }
)(ProfilePage);
