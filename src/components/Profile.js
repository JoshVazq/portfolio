import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../redux/profile/actions";
import { getProfile } from "../redux/profile/selectors";
class Profile extends Component {
  componentWillMount() {
    this.props.fetchProfile("2x03PVsba4qWSom0A8aYMq");
  }

  render() {
    console.log(this.props.profile);
    return (
      <div>
        <h2>Profile</h2>
        {this.props.profile.name}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { profile: getProfile(state) };
}
export default connect(mapStateToProps, { fetchProfile })(Profile);
