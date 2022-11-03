import React from 'react';
import { ButtonDetail, Worldview } from '../../../../../../constant/homepage.character';
import { LeftParagraph, RightParagraph, SeeDetailButton, TextDefault, TextLeft, TextRight, WorldviewTitle } from './styled';

const WorldView: React.FC<{ active: number }> = ({ active }) => {
  return (
    <div className="worldview">
      <WorldviewTitle active={active}>{Worldview.title}</WorldviewTitle>
      <TextDefault active={active}>{Worldview.default}</TextDefault>
      <TextLeft active={active}>
        <LeftParagraph active={active} delay="0s">
          <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '28px' }}>{Worldview.pl1}</p>
        </LeftParagraph>
        <LeftParagraph active={active} delay="0.2s">
          <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '28px' }}>{Worldview.pl2}</p>
        </LeftParagraph>
        <LeftParagraph active={active} delay="0.4s">
          <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '28px' }}>{Worldview.pl3}</p>
        </LeftParagraph>
      </TextLeft>
      <TextRight active={active}>
        <RightParagraph active={active} delay="0.6s">
          <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '28px' }}>{Worldview.pr1}</p>
        </RightParagraph>
        <RightParagraph active={active} delay="0.8s">
          <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '28px' }}>{Worldview.pr2}</p>
        </RightParagraph>
      </TextRight>
      <SeeDetailButton active={active} href="#">
        {ButtonDetail}
      </SeeDetailButton>
    </div>
  );
};

export default WorldView;
