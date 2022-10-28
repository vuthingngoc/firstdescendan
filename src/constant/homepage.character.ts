enum Worldview {
  title = 'Worldview',
  default = 'The peace of Ingris is in the hands of Descendants, who inherited their power from the Ancestors.',
  pl1 = 'It all began 100 years ago. The Vulgus crossed over the dimension, destroyed castles, and used humans as sacrifice or experimental subjects.',
  pl2 = 'Then the Colossuses appeared, devastating literally everything on earth.',
  pl3 = 'Humans who managed to survive gathered in Albion, preparing for the last battle.',
  pr1 = 'It was then the Magisters, a certain group of Vulgus with high technical skills, who joined them.',
  rr2 = 'The Magisters were determined to not allow their weapons to be used to destroy Ingris any further. And above all, Arche found in humans’ genes was a genuine heritage which had infinite potentials.',
  button = 'See Details',
}
const CharacterText = 'Character';
const SkillBackGround = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0…dBlur_3_15'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E";
const Characters = [
  {
    name: 'Ajax',
    NAME: 'AJAX',
    slogan: '“I will show you how I returned.”',
    story1:
      'After retiring, Ajax was enjoying the second phase of his life as a military college professor. But when he heard that the Helldivers, led by his friend Aisha, had been killed, he decided to return for duty. Headquarters were happy to have him back, an experienced, skilled commander.',
    story2: 'But Ajax took something in return, too. He used his experience of being lost in the Void for years...',
    url: '',
    activeSkill: 'Active Skill',
    background: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/infoBg_y.png',
    characterModal: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/char_ajax.png',
    skills: [
      {
        img: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/character/ajax/skill1.png',
        name: 'Reversed Door',
        describe: 'Creates a shield in front of Ajax. Durability increases proportionally to Ajax’s HP and DEF.',
      },
      {
        img: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/character/ajax/skill2.png',
        name: 'Hypercube',
        describe: 'Leaps into the air and lands on the ground to strike nearby enemies, stunning them.',
      },
      {
        img: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/character/ajax/skill3.png',
        name: 'Expulsion',
        describe: 'Strikes nearby enemies, knocking them back.',
      },
      {
        img: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/character/ajax/skill4.png',
        name: 'Hypercube',
        describe: 'Creates a dome-shaped shield. Durability increases proportionally to Ajax’s HP and DEF.',
      },
    ],
    nameImg: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/name_ajax.png',
    lineCenterUrl: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/line_center_1.png',
    backgroundImage: 'linear-gradient(180deg,rgba(214,133,0,.9),rgba(177,100,0,.9))',
    boxShadow: '-2px 0 12px 0 rgb(228 150 31 / 50%)',
    dragBackground: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/btn_drag_1.png',
    overlay: 'https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/info_overlay_1.png',
  },
];

const arrowLeftBG =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 25 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.164 15.968L16.877 6.32 17.61 0 0 15.968 17.61 33l-.733-6.321L6.164 15.968z' fill='%23fff'/%3E%3Cpath d='M25 16.5l-5.189-5.073-5.188 5.073 5.188 5.073L25 16.5z' fill='%23fff'/%3E%3C/svg%3E\")";

const arrowRightBG =
  "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 25 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.836 15.968L8.123 6.32 7.39 0 25 15.968 7.39 33l.733-6.321 10.713-10.711z' fill='%23fff'/%3E%3Cpath d='M0 16.5l5.188-5.073 5.189 5.073-5.189 5.073L0 16.5z' fill='%23fff'/%3E%3C/svg%3E";

export { Worldview, CharacterText, Characters, SkillBackGround, arrowLeftBG, arrowRightBG };
