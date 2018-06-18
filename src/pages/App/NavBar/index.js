import React from "react";
import { connect } from "react-redux";
import { isLoading } from "redux/ui/selectors";
import { getAvatar } from "redux/profile/selectors";
import { Asset } from "model/asset";
import "./style.css"

type Props = {
    avatar: Asset
};
export const NavBar = ({ avatar }: Props) => (
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {avatar && (<img title={avatar.title} alt={avatar.description} src={avatar.url} style={{ width: "100%" }} />)}

        <a href="/home" class="w3-bar-item w3-button w3-padding-large w3-teal">
            <i class="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
        </a>
        <a href="/about" class="w3-bar-item w3-button w3-padding-large w3-hover-teal">
            <i class="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
        </a>
        <a href="/photos" class="w3-bar-item w3-button w3-padding-large w3-hover-teal">
            <i class="fa fa-eye w3-xxlarge"></i>
            <p>PHOTOS</p>
        </a>
        <a href="/contact" class="w3-bar-item w3-button w3-padding-large w3-hover-teal">
            <i class="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
        </a>
    </nav>
);

export const mapStateToProps = (state: any) => ({
    avatar: getAvatar(state)
});

export default connect(mapStateToProps)(NavBar);
