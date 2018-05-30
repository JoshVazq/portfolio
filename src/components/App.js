import React from "react";
import { connect } from "react-redux";
import { isLoading } from "../redux/ui/selectors";
import ProfilePage from "./ProfilePage";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

type Props = {
  isLoading: boolean
};
export const App = ({ isLoading }: Props) => (
  <div style={styles}>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    isLoading : {isLoading.toString()}
    <ProfilePage />
  </div>
);

export const mapStateToProps = (state: any) => ({
  isLoading: isLoading(state)
});

export default connect(mapStateToProps)(App);
