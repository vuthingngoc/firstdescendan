import React from 'react';
import { Characters, CharacterText } from '../../../../../../constant/homepage.character';
import { CharacterInfo, CharacterNameBold, CharacterTitle, CharImg, Slogan } from './styled';

const Character: React.FC = () => {
  const character = Characters[0];
  return (
    <div className="character">
      <CharacterTitle>{CharacterText}</CharacterTitle>
      <CharacterInfo>
        <CharacterNameBold>{character.NAME}</CharacterNameBold>
        <Slogan>{character.slogan}</Slogan>
      </CharacterInfo>
      <CharImg>
        <img src={character.characterModal} style={{ maxWidth: 'none' }} />
      </CharImg>
    </div>
  );
};

export default Character;
