import yumiru from "./../images/projects/yumiru.png";
import holidaze from "./../images/projects/holidaze.png";
import mtg from "./../images/projects/mtg.png";
import adventuregame from "./../images/projects/adventuregame.png";
import spacex from "./../images/projects/spacex.png";
import candle from "./../images/projects/candle.png";
import besseggen from "./../images/projects/besseggen.png";
import panda from "./../images/projects/panda.png";
import unstudents from "./../images/projects/unstudents.png";

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
    netlify: "https://upbeat-beaver-e142e8.netlify.com/",
    image: mtg,
    name: "Magic: the Gathering",
    created: "29/03/2020",
    tools: "React | Redux | SCSS",
    type: "Full week project",
    description:
      "Final project of the React course created with Scryfall’s API. The project won an award for best school project 2020.",
    gitrepo: "https://github.com/SelmaWaller/selma-waller-js-frameworks-ca",
  },
  {
    netlify: "https://vibrant-brown-215f63.netlify.com/",
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
    netlify: "https://affectionate-booth-60fd09.netlify.app/",
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
    netlify: "https://confident-edison-3f14f5.netlify.app/",
    image: candle,
    name: "Bruning Candle Drawing",
    created: "07/10/2019",
    tools: "HTML | CSS",
    type: "Hobby project",
    description: "A simple CSS drawing of a lit candle",
    gitrepo: "https://github.com/SelmaWaller/living-candle-drawing",
  },
  {
    netlify:
      "https://xd.adobe.com/view/d8b73802-6c6b-4506-7a59-fee5e031bc23-ae86/?fullscreen",
    image: besseggen,
    name: "Prototype",
    created: "25/03/2019",
    tools: "Adobe XD | Photoshop",
    type: "Weekend project",
    description:
      "Final assignment of the interaction design course: A redesign of Besseggen Arkitekter's website.",
    gitrepo: null,
  },
  {
    netlify: "https://epic-kowalevski-bfd1ca.netlify.app/",
    image: panda,
    name: "Pure CSS Panda",
    created: "22/12/2018",
    tools: "HTML | CSS",
    type: "Hobby project",
    description: "My first attempt at a CSS drawing",
    gitrepo: "https://github.com/SelmaWaller/panda-css-drawing",
  },
  {
    netlify: "https://vibrant-brattain-48c3d9.netlify.app/",
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
