import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
 
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  
  
  koliving,
  studi,
  
  antiques,
  koli,
  photo,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Roadmap",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developpeur Web",
    icon: web,
  },
  {
    title: "Developpeur  Front-End React",
    icon: mobile,
  },
  {
    title: "Developpeur Back-End",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
 
  {
    title: "Formation Developpeur Web Full Stack",
    company_name: "Studi, Digital Campus",
    icon: studi,
    iconBg: "#FFFF",
    date: "Septembre 2022 - Juin 2023",
    points: [
      "J'ai suivi une formation intensive chez Studi Digital Campus où j'ai acquis des compétences en React.js, Node.js, HTML, CSS, Bootstrap, Tailwind, PHP et Figma.",
      "Je suis désormais en mesure de collaborer avec des équipes pluridisciplinaires pour développer et maintenir des applications web de qualité, en utilisant ces technologies.",
      "Je suis également capable de mettre en œuvre des designs réactifs et d'assurer la compatibilité multi-navigateurs, tout en participant à des examens de code et en fournissant des commentaires constructifs aux autres développeurs."
    ],
  },
  {
    title: "Stage chez Koliving",
    company_name: "Developpeur Web Full Stack",
    icon: koliving,
    iconBg: "#383E56",
    date: "Janvier 2023 - Mars 2023",
    points: [
      "Développement et maintenance d’applications Web à l’aide de React/Typescript et d’autres technologies connexes.",
      "Collaborer avec les équipes , y compris des chefs de projets, des designers UI/UX. ",
      " Participer aux revues de code et fournir des commentaires constructifs entre développeurs. ",
    ],
  },
  {
    title: "Developpeur Front-End React",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "A venir",
    points: [
      "Comming soon........."
    ],
  },
  {
    title: "Developpeur Front-End React",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "A venir",
    points: [
      "Comming soon........."
    ],
  },
];



const projects = [
  {
    name: "Le Quai Antique",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow ",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "violet-gradient",
      },
    ],
    image: antiques,
    source_code_link: "https://github.com/JOBOYA/Le_Quai_Antique",
  },
  {
    name: "KOLIFLUX",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: koli,
    source_code_link: "https://github.com/JOBOYA/KOLI-FLUX",
  },
  {
    name: "Charles Cantin",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    
    ],
    image: photo,
    source_code_link: "https://github.com/JOBOYA/CharlesCantin",
  },
];

export { services, technologies, experiences, projects };
