import React from 'react';
import { Worldview } from '../../../../../../constant/homepage.character';
import { TextDefault, WorldviewTitle } from './styled';

const WorldView: React.FC = () => {
  return (
    <div className="worldview">
      <WorldviewTitle>{Worldview.title}</WorldviewTitle>
      <TextDefault>{Worldview.default}</TextDefault>
    </div>
  );
};

export default WorldView;
