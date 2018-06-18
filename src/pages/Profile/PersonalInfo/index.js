
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
          <LanguagesBlock />


        </div>
      </div>
      <br />

    </div>

  )
};
