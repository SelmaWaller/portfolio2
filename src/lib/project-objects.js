import mtg from './../images/projects/mtg.png';
import rickandmorty from './../images/projects/rickandmorty.png';
import adventuregame from './../images/projects/adventuregame.png';

const ProjectObjects = [
  {
    netlify: 'https://upbeat-beaver-e142e8.netlify.com/',
    image: mtg,
    name: 'Magic: the Gathering',
    published: '29/03/2020',
    tools: 'React | Redux | SCSS',
    type: 'Full week project',
    description:
      'Final project for the React course created with Scryfall’s API',
    gitrepo: 'https://github.com/SelmaWaller/selma-waller-js-frameworks-ca',
  },
  {
    netlify: 'https://quirky-swirles-d29f01.netlify.com/',
    image: rickandmorty,
    name: 'Rick and Morty',
    published: '22/03/2020',
    tools: 'React | Redux | SCSS',
    type: 'Weekend project',
    description:
      'First project after being introduced to React Hooks and Redux',
    gitrepo: 'https://github.com/SelmaWaller/rick-and-morty',
  },
  {
    netlify: 'https://vibrant-brown-215f63.netlify.com/',
    image: adventuregame,
    name: 'Multiple Choice Game',
    published: '16/12/2019',
    tools: 'JS | HTML | SCSS',
    type: 'Hobby project',
    description:
      'An adventure game/multiple choice story with illustrations made in pure CSS.',
    gitrepo: 'https://github.com/SelmaWaller/adventure-game',
  },
];

export default ProjectObjects;
