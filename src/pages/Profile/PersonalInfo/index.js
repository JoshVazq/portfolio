import React from 'react';
import { Profile } from 'model/profile';

import { TopSkillsBlock } from './TopSkillsBlock';
import { LanguagesBlock } from './LanguagesBlock';

type Props = {
  profile: Profile
};
export const PersonalInfo = ({ profile }: Props) => {
  const avatar = profile.avatar && (
    <img
      title={profile.avatar.title}
      alt={profile.avatar.description}
      src={profile.avatar.url}
      /* className="br-100 h4 w4 dib ba b--black-05 pa2" */
    />
  );
  return (
    /* center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 */
    <article className="w-33 fl shadow-1 bg-white">
      <div className="tc">
        {avatar}
        <h2>{profile.name}</h2>
      </div>
      <div className="w3-container  pa3 pa4-ns">
        <p>
          <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
          {profile.headline}
        </p>
        {/* <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p> */}
        <p>
          <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
          {profile.email}
        </p>
        <p>
          <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
          {profile.phone && profile.phone.toString()}
        </p>
        <hr />

        <TopSkillsBlock skills={profile.skills} />
        <LanguagesBlock />
      </div>
    </article>
  );
};
