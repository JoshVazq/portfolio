
import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "../model/profile"
import { fetchProfile } from "../redux/profile/actions";
import { getProfile } from "../redux/profile/selectors";

type Props = {
  profile: Profile,
  fetchProfile: Function
};
export class ProfilePage extends Component<Props> {
  componentWillMount() {
    this.props.fetchProfile("2x03PVsba4qWSom0A8aYMq");
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        {this.props.profile.name}
      </div>
    );
  }
}
export const mapStateToProps = (state: any) => ({ profile: getProfile(state) });

export default connect(mapStateToProps, { fetchProfile })(ProfilePage);
