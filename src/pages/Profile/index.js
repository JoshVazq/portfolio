
import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "model/profile"
import { fetchProfile } from "redux/profile/actions";
import { getProfile } from "redux/profile/selectors";
import { WorkBlock } from "./WorkBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";
import { TopSkillsBlock } from "./TopSkillsBlock";
import { LanguagesBlock } from "./LanguagesBlock";

type Props = {
  profile: Profile,
  fetchProfile: Function
};
export class ProfilePage extends Component<Props> {
  componentWillMount() {
    this.props.fetchProfile("2x03PVsba4qWSom0A8aYMq");
  }

  render() {
    const profile = this.props.profile;
    if (profile) {
      const avatar = profile.avatar && <img title={profile.avatar.title} alt={profile.avatar.description} src={profile.avatar.url} style={{ width: "100%" }} />;
      return (
        <div class="w3-content w3-margin-top" style={{ maxWidth: "1400px" }} >

          <div class="w3-row-padding">

            <div class="w3-third">

              <div class="w3-white w3-text-grey w3-card-4">
                <div class="w3-display-container">
                  {avatar}
                  <div class="w3-display-bottomleft w3-container w3-text-white">
                    <h2>{profile.name}</h2>
                  </div>
                </div>
                <div class="w3-container">
                  <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                  <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
                  <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
                  <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                  <hr />

                  <TopSkillsBlock skills={profile.skills} />
                  <LanguagesBlock skills={profile.skills} />


                </div>
              </div>
              <br />

            </div>

            <div class="w3-twothird">
              <WorkBlock experience={profile.experience} />
              <EducationBlock education={profile.education} />
              <SkillsBlock skills={profile.skills} />

            </div>

          </div>

        </div >

        /*  <footer class="w3-container w3-teal w3-center w3-margin-top">
           <p>Find me on social media.</p>
           <i class="fa fa-facebook-official w3-hover-opacity"></i>
           <i class="fa fa-instagram w3-hover-opacity"></i>
           <i class="fa fa-snapchat w3-hover-opacity"></i>
           <i class="fa fa-pinterest-p w3-hover-opacity"></i>
           <i class="fa fa-twitter w3-hover-opacity"></i>
           <i class="fa fa-linkedin w3-hover-opacity"></i>
           <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
         </footer> */
      );
    }
    return null;

  }
}
export const mapStateToProps = (state: any) => ({ profile: getProfile(state) });

export default connect(mapStateToProps, { fetchProfile })(ProfilePage);
