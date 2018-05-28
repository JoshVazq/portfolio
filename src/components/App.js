import React from "react";
import { connect } from "react-redux";
import { isLoading } from "../redux/ui/selectors";
import Test from "./Test";
import Profile from "./Profile";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const App = ({ isLoading }) => (
  <div style={styles}>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    isLoading : {isLoading.toString()}
    <Test />
    <Profile />
  </div>
);

const mapStateToProps = state => ({
  isLoading: isLoading(state)
});

export default connect(mapStateToProps)(App);
