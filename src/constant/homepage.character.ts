enum Worldview {
  title = 'Worldview',
  default = 'The peace of Ingris is in the hands of Descendants, who inherited their power from the Ancestors.',
  pl1 = 'It all began 100 years ago. The Vulgus crossed over the dimension, destroyed castles, and used humans as sacrifice or experimental subjects.',
  pl2 = 'Then the Colossuses appeared, devastating literally everything on earth.',
  pl3 = 'Humans who managed to survive gathered in Albion, preparing for the last battle.',
  pr1 = 'It was then the Magisters, a certain group of Vulgus with high technical skills, who joined them.',
  pr2 = 'The Magisters were determined to not allow their weapons to be used to destroy Ingris any further. And above all, Arche found in humans’ genes was a genuine heritage which had infinite potentials.',
}
const ButtonDetail = 'See Details';
const CharacterText = 'Character';
const ViewOther = 'View Other Characters';
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
    skillColor: '#b16400',
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
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 25 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.836 15.968L8.123 6.32 7.39 0 25 15.968 7.39 33l.733-6.321 10.713-10.711z' fill='%23fff'/%3E%3Cpath d='M0 16.5l5.188-5.073 5.189 5.073-5.189 5.073L0 16.5z' fill='%23fff'/%3E%3C/svg%3E\")";

const SkillBackground =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3_15)'%3E%3Cpath d='M36.894 73.771C16.634 73.771.21 57.347.21 37.087.21 16.827 16.634.402 36.894.402c20.26 0 36.684 16.424 36.684 36.685 0 20.26-16.424 36.684-36.684 36.684z' stroke='%23fff' stroke-width='.419'/%3E%3Cpath d='M67.918 37.087c0-17.135-13.89-31.025-31.024-31.025S5.87 19.952 5.87 37.087c0 17.134 13.89 31.024 31.024 31.024s31.024-13.89 31.024-31.024z' fill='%23040404' fill-opacity='.25'/%3E%3Cpath d='M67.08 37.087C67.08 20.415 53.565 6.9 36.894 6.9S6.708 20.415 6.708 37.087c0 16.67 13.515 30.186 30.186 30.186S67.08 53.758 67.08 37.087z' stroke='%23fff' stroke-opacity='.75' stroke-width='1.677'/%3E%3Cg opacity='.75' filter='url(%23filter0_f_3_15)'%3E%3Cpath d='M36.475 57.21c9.956 0 18.027-8.634 18.027-19.285S46.432 18.64 36.475 18.64s-18.028 8.634-18.028 19.285 8.071 19.286 18.028 19.286z' fill='%23DBDBDB'/%3E%3Cpath d='M54.083 37.925c0 10.447-7.91 18.866-17.608 18.866-9.699 0-17.609-8.42-17.609-18.866s7.91-18.866 17.609-18.866c9.698 0 17.608 8.42 17.608 18.866z' stroke='%23000' stroke-width='.839'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3_15'%3E%3Cpath fill='%23fff' transform='translate(-7 -7)' d='M0 0h87v90H0z'/%3E%3C/clipPath%3E%3Cfilter id='filter0_f_3_15' x='-6.708' y='-6.515' width='86.366' height='88.881' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='12.578' result='effect1_foregroundBlur_3_15'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";

const SkillBackgroundDark =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_3)'%3E%3Cpath d='M36.894 73.897c-20.33 0-36.81-16.48-36.81-36.81 0-20.33 16.48-36.81 36.81-36.81 20.33 0 36.81 16.48 36.81 36.81 0 20.33-16.48 36.81-36.81 36.81z' stroke='%23fff' stroke-opacity='.5' stroke-width='.168'/%3E%3Cpath d='M67.918 37.087c0-17.135-13.89-31.025-31.024-31.025S5.869 19.952 5.869 37.086c0 17.135 13.89 31.025 31.025 31.025 17.134 0 31.024-13.89 31.024-31.025z' fill='%23040404' fill-opacity='.55'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_3'%3E%3Cpath fill='%23fff' d='M0 0h74v74H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\")";

const SkillSelectArrow =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.543 8.077l4.167-4.311 2.73-.296-6.897 7.088L.186 3.47l2.73.296 4.627 4.311z' fill='%23fff'/%3E%3Cpath d='M7.313.496l2.191 2.088-2.19 2.089-2.192-2.089L7.313.496z' fill='%23fff'/%3E%3C/svg%3E\")";

const SkillBorderBackground =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_2)'%3E%3Cpath d='M73.434 52.083a36.813 36.813 0 002.354-12.996c0-4.575-.832-8.955-2.354-12.997M50.633 4.1a36.853 36.853 0 00-11.739-1.907c-4.104 0-8.051.67-11.739 1.906m23.478 69.975a36.854 36.854 0 01-11.739 1.907c-4.104 0-8.051-.67-11.739-1.907m-22.8-21.99A36.813 36.813 0 012 39.086c0-4.575.833-8.955 2.354-12.997' stroke='%23fff' stroke-width='2.515'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_2'%3E%3Cpath fill='%23fff' d='M0 0h78v78H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\")";

export {
  Worldview,
  CharacterText,
  Characters,
  arrowLeftBG,
  arrowRightBG,
  ButtonDetail,
  ViewOther,
  SkillSelectArrow,
  SkillBackground,
  SkillBorderBackground,
  SkillBackgroundDark,
};
