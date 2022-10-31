import styled from 'styled-components';

const Section = styled.section`
  height: 1018px;
  position: relative;
  ::after {
    z-index: 1;
    content: '';
    display: block;
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translateX(-50%);
    width: 39px;
    height: 29px;
    background-image: url('https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/icon_scroll.png');
    opacity: 0.25;
  }
`;

const BackVideoLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Video = styled.video`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  vertical-align: top;
  max-width: 2560px;
  width: 2560px;
  height: 1018px;
  transform: translateX(-50%);
`;

const VideoCover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(transparent, #000 80%);
  ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 438px;
    background: linear-gradient(0deg, #000 2.06%, rgba(0, 0, 0, 0.87) 60.53%, transparent);
    content: '';
  }
`;

const TopCover = styled.div`
  position: relative;
  width: 1000px;
  height: 750px;
  margin: 0 auto;
  z-index: 3;
  color: hsla(0, 0%, 100%, 0.9);
`;

const GameTitle = styled.h2`
  display: block;
  font-weight: 700;
  font-family: 'Elice Digital Baeum' !important;
  line-height: 78px;
  word-break: break-word !important;
  position: absolute;
  top: 523px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 74px;
  text-align: center;
  letter-spacing: 1px;
`;

const GameText = styled.sub`
  font-size: 50px;
  display: block;
  font-weight: 700;
  font-family: 'Elice Digital Baeum' !important;
  line-height: 78px;
  word-break: break-word !important;
`;

const VideoButton = styled.button`
  display: block;
  position: absolute;
  top: 345px;
  left: 50%;
  transform: translateX(-50%);
  width: 133px;
  height: 133px;
  background-size: 100% auto;
  background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/btn_trailler.png);
  text-indent: -9999px;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/btn_trailler_on.png);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;

const NoticeList = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  z-index: 2;
`;

const Article = styled.article`
  position: relative;
  margin: 0 18px;
  width: 100%;
  max-width: 376px;
  height: 134px;
  box-shadow: 4px 6px 8px rgb(0 0 0 / 20%);
  font-family: 'Pretendard', sans-serif;
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 9px, calc(100% - 9px) 0);
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 9px, calc(100% - 9px) 0);
  transition: background 0.5s;
  background: #212327;
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #212327, #2f343f 99.99%, rgba(33, 35, 39, 0));
    content: '';
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover a .line-after {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  flex: 1 1 auto;
`;

const InfoCatefory = styled.div`
  padding: 1px 26px 0;
  font-size: 14px;
  font-weight: 700;
`;

const InfoCategoryText = styled.span`
  color: rgb(229, 118, 14);
  margin: 18px 0 0 2px;
  display: block;
`;

const InfoTitle = styled.div`
  padding: 14px 10px 0 26px;
  color: #ddd;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  word-break: break-all;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Thumbnail = styled.div`
  width: 160px;
  flex-shrink: 0;
`;

const LineBefore = styled.div`
  position: absolute;
  top: 0;
  left: 1px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 1px;
`;

const LineAfter = styled.div`
  overflow: hidden;
  width: 0;
  height: 11px;
  left: 1px;
  top: 0;
  transition: width 0.3s ease;
  position: absolute;
  top: 0;
  left: 1px;
`;

export {
  Section,
  BackVideoLayout,
  Video,
  VideoCover,
  TopCover,
  GameTitle,
  GameText,
  VideoButton,
  NoticeList,
  Article,
  Info,
  InfoCatefory,
  InfoTitle,
  Thumbnail,
  InfoCategoryText,
  LineBefore,
  LineAfter,
};
