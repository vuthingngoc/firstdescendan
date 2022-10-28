import React from 'react';
import { Characters } from '../../../../constant/homepage.character';
import Character from './components/Character';
import MouseDrag from './components/MouseDrag';
import WorldView from './components/WorldView';
import { Section, SwipperWrap } from './styled';

const CharacterIntroduce: React.FC = () => {
  const character = Characters[0];
  return (
    <Section bgURL={character.background}>
      <SwipperWrap overlay={character.overlay} nameImg={character.nameImg}>
        <WorldView />
        <Character />
        <MouseDrag />
      </SwipperWrap>
    </Section>
  );
};

export default CharacterIntroduce;
