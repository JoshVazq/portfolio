import React from 'react';
import { connect } from 'react-redux';
import { isLoading } from 'redux/ui/selectors';
import { getAvatar } from 'redux/profile/selectors';
import { Asset } from 'model/asset';
import './style.css';

type Props = {
  avatar: Asset
};
export const NavBar = ({ avatar }: Props) => (
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    {avatar && (
      <img
        title={avatar.title}
        alt={avatar.description}
        src={avatar.url}
        style={{ width: '100%' }}
      />
    )}

    <a href="/home" className="w3-bar-item w3-button w3-padding-large bg-teal">
      <i className="fa fa-home w3-xxlarge" />
      <p>HOME</p>
    </a>
    <a href="/about" className="w3-bar-item w3-button w3-padding-large w3-hover-teal">
      <i className="fa fa-user w3-xxlarge" />
      <p>ABOUT</p>
    </a>
    <a href="/photos" className="w3-bar-item w3-button w3-padding-large w3-hover-teal">
      <i className="fa fa-eye w3-xxlarge" />
      <p>PHOTOS</p>
    </a>
    <a href="/contact" className="w3-bar-item w3-button w3-padding-large w3-hover-teal">
      <i className="fa fa-envelope w3-xxlarge" />
      <p>CONTACT</p>
    </a>
  </nav>
);

export const mapStateToProps = (state: any) => ({
  avatar: getAvatar(state)
});

export default connect(mapStateToProps)(NavBar);
