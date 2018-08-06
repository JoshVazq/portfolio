import React from 'react';
import { Profile } from 'model/profile';

/* import { TopSkillsBlock } from './TopSkillsBlock';
import { LanguagesBlock } from './LanguagesBlock'; */

type Props = {
  profile: Profile
};
export const PersonalInfo = ({ profile }: Props) => {
  const avatar = profile.avatar && (
    <img
      title={profile.avatar.title}
      alt={profile.avatar.description}
      src={profile.avatar.url}
      className="bg-ecru-white w5 br-100"
    />
  );
  return (
    <article className="flex flex-column items-center pa4-l center mw1100px">
      <h2 className="tc normal f1 fw1 teal">{profile.name}</h2>
      <div className="flex flex-column justify-center align-center flex-row-l bt-l b--moon-gray pa4-l">
        <div className="tc order-1-l ma4-l flex-l items-center-l">{avatar}</div>
        {profile.about && (
          <div className="order-0-l ma4">
            <h3 className="tc normal f2 fw1 teal">About me</h3>
            <div className="tc">
              {profile.about
                .split('\n')
                .map((sentence, index) => <p key={'about-' + index}>{sentence}</p>)}
            </div>
          </div>
        )}

        <div className="ma4 flex flex-column items-center order-2-l justify-center">
          <p className="w14em">
            <i className="fa fa-briefcase  mr3 w3-large teal" />
            {profile.headline}
          </p>
          {/* <p className="w14em"><i className="fa fa-home  mr3 w3-large teal"></i>London, UK</p> */}
          <p className="w14em">
            <i className="fa fa-envelope  mr3 w3-large teal" />
            {profile.email}
          </p>
          <p className="w14em">
            <i className="fa fa-phone  mr3 w3-large teal" />
            {profile.phone && profile.phone.toString()}
          </p>

          {/* <TopSkillsBlock skills={profile.skills} />
        <LanguagesBlock /> */}
        </div>
      </div>
    </article>
  );
};
