import React from 'react';
import { Profile } from 'model/profile';

import { TopSkillsBlock } from './TopSkillsBlock';
import { LanguagesBlock } from './LanguagesBlock';

import './style.css';

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
  /*   top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  fixed-ns bottom-0-ns
  */

  return (
    <article className="ph2 mb3 mb0-ns bottom-1-ns top-1-ns w5-ns fixed-ns flex-ns flex-column-ns flex-column-ns w-25-l">
      <div className="bg-white shadow-1">
        <div className="tc avatar">{avatar}</div>
        <h2 className="tc normal f4">{profile.name}</h2>
        <div className="ph3">
          <p>
            <i className="fa fa-briefcase fa-fw mr3 w3-large teal" />
            {profile.headline}
          </p>
          {/* <p><i className="fa fa-home fa-fw mr3 w3-large teal"></i>London, UK</p> */}
          <p>
            <i className="fa fa-envelope fa-fw mr3 w3-large teal" />
            {profile.email}
          </p>
          <p>
            <i className="fa fa-phone fa-fw mr3 w3-large teal" />
            {profile.phone && profile.phone.toString()}
          </p>
          <hr />

          <TopSkillsBlock skills={profile.skills} />
          <LanguagesBlock />
        </div>
      </div>
    </article>
  );
};
