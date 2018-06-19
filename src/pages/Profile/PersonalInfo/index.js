
import React from "react";
import { Profile } from "model/profile"

import { TopSkillsBlock } from "./TopSkillsBlock";
import { LanguagesBlock } from "./LanguagesBlock";

type Props = {
  profile: Profile
};
export const PersonalInfo = ({ profile }: Props) => {
  const avatar = profile.avatar && <img title={profile.avatar.title} alt={profile.avatar.description} src={profile.avatar.url} style={{ width: "100%" }} />;
  return (
    <div className="w3-third">

      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container">
          {avatar}
          <div className="w3-container w3-text-black" style={{ textAlign: 'center' }}>
            <h2>{profile.name}</h2>
          </div>
        </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.headline}</p>
          {/* <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p> */}
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.email}</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.phone.toString()}</p>
          <hr />

          <TopSkillsBlock skills={profile.skills} />
          <LanguagesBlock />


        </div>
      </div>
      <br />

    </div>

  )
};
