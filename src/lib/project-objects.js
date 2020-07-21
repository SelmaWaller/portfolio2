import yumiru from "../images/projects/yumiru.png";
import holidaze from "../images/projects/holidaze.png";
import mtg from "../images/projects/mtg.png";
import adventuregame from "../images/projects/adventuregame.png";
import spacex from "../images/projects/spacex.png";
import gameofzones from "../images/projects/gameofzones.png";
import unstudents from "../images/projects/unstudents.png";

const ProjectObjects = [
  {
    netlify: "https://yumiru.netlify.app/",
    image: yumiru,
    name: "An Introduction to Japanese",
    created: "08/07/2020",
    tools: "React | Illustrator | Photoshop",
    type: "Hobby project",
    description: `My goal with this app is to get a better understanding of Redux, and to learn a thing or two about ReasonML and styled components.`,
    gitrepo: "https://github.com/SelmaWaller/yumiru",
  },
  {
    netlify: null,
    image: holidaze,
    name: "Hotel Booking: Holidaze",
    created: "05/06/2020",
    tools: "React | SCSS | Illustrator | PHP",
    type: "Final project exam",
    description:
      "This project is created with PHP and needs to be run on a local server to work. Best viewed on mobile.",
    gitrepo: "https://github.com/SelmaWaller/project-exam-2",
  },
  {
    netlify: "https://mtg-scryfall.netlify.app/",
    image: mtg,
    name: "Magic: the Gathering",
    created: "29/03/2020",
    tools: "React | Redux | SCSS",
    type: "Full week project",
    description:
      "Final project of the React course created with Scryfall’s API. The project won an award for best Frontend 2 project 2020.",
    gitrepo: "https://github.com/SelmaWaller/selma-waller-js-frameworks-ca",
  },
  {
    netlify: "https://illustrated-adventure-game.netlify.app/",
    image: adventuregame,
    name: "Multiple Choice Game",
    created: "16/12/2019",
    tools: "JS | HTML | CSS | SCSS",
    type: "Hobby project",
    description:
      "An adventure game/multiple choice story with illustrations made in pure CSS.",
    gitrepo: "https://github.com/SelmaWaller/adventure-game",
  },
  {
    netlify: "https://game-of-zones.netlify.app/",
    image: gameofzones,
    name: "Game of Zones",
    created: "11/12/2019",
    tools: "JS | HTML5 | SCSS",
    type: "Final semester project",
    description:
      "A Game of Thrones themed 2-player board game with character selection.",
    gitrepo: "https://github.com/SelmaWaller/game-of-zones",
  },
  {
    netlify: "https://spacex-microsite.netlify.app/",
    image: spacex,
    name: "Spacex Microsite",
    created: "05/06/2019",
    tools: "JS | HTML5 | CSS",
    type: "First project exam",
    description:
      "A microsite created primarily for young people to learn more about SpaceX",
    gitrepo: "https://github.com/SelmaWaller/spacex-microsite",
  },
  {
    netlify: "https://un-students.netlify.app/",
    image: unstudents,
    name: "UN Students Oslo",
    created: "14/12/2018",
    tools: "HTML5 | CSS | Illustrator | Photoshop",
    type: "First semester project",
    description:
      "An HTML5 and CSS website for UN Student Association Oslo with illustrations made in Adobe Illustrator",
    gitrepo: "https://github.com/SelmaWaller/un-students-oslo",
  },
];

export default ProjectObjects;
