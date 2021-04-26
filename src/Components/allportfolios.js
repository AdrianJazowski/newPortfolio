/** @format */

import gameMaker from "../assets/BoardgameMaker.PNG";
import Blog from "../assets/Blog.png";
import Shop from "../assets/OnlineShop.PNG";
import Todo from "../assets/todolist.PNG";
import QuizApp from "../assets/QuizApp.PNG";
import LinkedIn from "../assets/LinkedIn.PNG";

const portfolios = [
  {
    id: 1,
    category: "Javascript",
    link1: "https://github.com/AdrianJazowski/boardgameMaker",
    link2: "https://boardgamemaker.netlify.app/",
    icon1: "GitHub",
    icon2: "Demo",
    image: gameMaker,
    title: "Boardgame Maker",
  },
  {
    id: 2,
    category: "Redux",
    link1: "https://github.com/AdrianJazowski/boardgameBlog",
    link2: "",
    icon1: "GitHub",
    icon2: "Demo",
    image: Blog,
    title: "Boardgame Forum",
  },
  {
    id: 3,
    category: "Redux",
    link1: "https://github.com/AdrianJazowski/linkedin-clone",
    link2: "https://clone-linkedind.netlify.app/",
    icon1: "GitHub",
    icon2: "Demo",
    image: LinkedIn,
    title: "LinkedIn clone",
  },
  {
    id: 4,
    category: "React",
    link1: "https://github.com/AdrianJazowski/onlineShop",
    link2: "https://eshoppage.netlify.app/",
    icon1: "GitHub",
    icon2: "Demo",
    image: Shop,
    title: "Online Shop",
  },
  {
    id: 5,
    category: "React",
    link1: "https://github.com/AdrianJazowski/todolist",
    link2: "https://todolistadrianjazowski.netlify.app/",
    icon1: "GitHub",
    icon2: "Demo",
    image: Todo,
    title: "Recoil.js Todo list",
  },
  {
    id: 6,
    category: "Typescript",
    link1: "https://github.com/AdrianJazowski/Quiz",
    link2: "https://quizts.netlify.app/",
    icon1: "GitHub",
    icon2: "Demo",
    image: QuizApp,
    title: "Type Quiz",
  },
];

export default portfolios;
