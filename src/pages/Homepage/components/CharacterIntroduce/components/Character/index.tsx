import React, { useState } from 'react';
import {
  ButtonDetail,
  Characters,
  CharacterText,
  SkillBackground,
  SkillBackgroundDark,
  SkillBorderBackground,
  SkillSelectArrow,
  ViewOther,
} from '../../../../../../constant/homepage.character';
import {
  ActiveSkill,
  CharacterInfo,
  CharacterNameBold,
  CharacterTitle,
  CharImg,
  H4Name,
  IntroText,
  RightTextWrap,
  SeeDetailButton,
  Skill,
  SkillDescription,
  SkillDescriptionLayout,
  SkillDescriptionText,
  SkillImg,
  SkillLayout,
  SkillTitle,
  SkillWrap,
  Slogan,
  ViewOrderbutton,
} from './styled';

const Character: React.FC<{ active: number }> = ({ active }) => {
  const [selectSkill, setSelectSkill] = useState<number>(0);
  const character = Characters[0];
  return (
    <div className="character">
      <CharacterTitle active={active}>{CharacterText}</CharacterTitle>
      <CharacterInfo active={active}>
        <CharacterNameBold>{character.NAME}</CharacterNameBold>
        <Slogan>{character.slogan}</Slogan>
      </CharacterInfo>
      <H4Name active={active}>{character.name}</H4Name>
      <RightTextWrap active={active}>
        <IntroText active={active} delay="0s">
          {character.story1}
        </IntroText>
        <IntroText active={active} delay="0.2s">
          {character.story2}
        </IntroText>
        <SeeDetailButton active={active} href="#">
          {ButtonDetail}
        </SeeDetailButton>
      </RightTextWrap>
      <ActiveSkill active={active}>{character.activeSkill}</ActiveSkill>
      <SkillWrap active={active}>
        <ul style={active === 3 ? { height: '300px', opacity: '1' } : { height: '300px' }}>
          {character.skills.map((ele, index) => {
            return (
              <SkillLayout key={`skill-${index}`}>
                <Skill
                  select={selectSkill === index ? true : false}
                  skillSelectArrow={SkillSelectArrow}
                  skillBackground={SkillBackground}
                  skillBackgroundDark={SkillBackgroundDark}
                  skillSelectBorder={SkillBorderBackground}
                  onClick={() => setSelectSkill(index)}
                  style={{ left: `${88 * index}px` }}
                >
                  <SkillImg select={selectSkill === index ? true : false} src={ele.img} />
                </Skill>
                <SkillDescriptionLayout select={selectSkill === index ? true : false}>
                  <SkillTitle color={character.skillColor}>{ele.name}</SkillTitle>
                  <SkillDescription>
                    <SkillDescriptionText>{ele.describe}</SkillDescriptionText>
                  </SkillDescription>
                </SkillDescriptionLayout>
              </SkillLayout>
            );
          })}
        </ul>
        <ViewOrderbutton active={active} href="#">
          {ViewOther}
        </ViewOrderbutton>
      </SkillWrap>
      <CharImg>
        <img src={character.characterModal} style={{ maxWidth: 'none' }} />
      </CharImg>
    </div>
  );
};

export default Character;
