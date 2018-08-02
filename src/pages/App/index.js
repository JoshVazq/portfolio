import React from 'react';
import { connect } from 'react-redux';
import { isLoading } from 'redux/ui/selectors';
import ProfilePage from '../Profile';
/* import NavBar from "./NavBar";*/
import './style.css';

type Props = {
  isLoading: boolean
};
export const App = ({ isLoading }: Props) => (
  <div className="sans-serif">
    {/* <NavBar /> */}
    <div id="main">
      <ProfilePage />
    </div>
  </div>
);

export const mapStateToProps = (state: any) => ({
  isLoading: isLoading(state)
});

export default connect(mapStateToProps)(App);
