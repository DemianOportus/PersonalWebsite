import SequenceGame from "../images/SequenceGame.png";
import Eselection from "../images/e-selection.png";
import PersonalWebsite from "../images/personalWebsite.png";
import DiceGame from "../images/DiceGame.png";

const Projects = [
  {
    id: 1,
    img: SequenceGame,
    title: "SequenceGame",
    description:
      "SequenceGame is a memory game. A player has to remember a sequence of colors and be able to recite them back. Created using vanilla JS",
    sourceCode: "https://github.com/DemianOportus/SequenceGame",
    playCode: "https://demianoportus.github.io/SequenceGame/",
  },

  {
    id: 2,
    img: Eselection,
    title: "E-Selection",
    description:
      "Website offering different services, such as landscaping, housecleaning, etc. Implemented a Database to create Users and log-in. Created using ReactJS",
    sourceCode: "https://github.com/DemianOportus/e-selection",
    playCode: "https://e-selection.herokuapp.com/",
  },
  {
    id: 3,
    img: PersonalWebsite,
    title: "Personal Website",
    description:
      "This is my current website. It was created using React JS, MUI Library, Router, CSS, HTML.",
    sourceCode: "https://github.com/DemianOportus/PersonalWebsite",
    playCode: "/",
  },
  {
    id: 4,
    img: DiceGame,
    title: "DiceGame",
    description:
      "Play Dice against the computer. Both numbers will be completely random, and the highest number wins. Perfect way to resolve family conflicts with a game of Dice!",
    sourceCode: "https://github.com/DemianOportus/dice",
    playCode: "https://demianoportus.github.io/SequenceGame/",
  },
];

export default Projects;
