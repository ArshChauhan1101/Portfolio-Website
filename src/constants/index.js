import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  docker,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education Qualifications",
    title: "Educational Qualifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "High School",
    icon: web,
  },
  {
    title: "Secondary School",
    icon: mobile,
  },
  {
    title: "Bachelors Degree",
    icon: backend,
  },
  {
    title: "Future Aim",
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
    name: "git",
    icon: git,
  },

  {
    name: "git",
    icon: docker,
  },
  

];

const experiences = [
  {
    title: "High School",
    company_name: "Little Flower Public Senior Secondary School, India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed a Maths Model to indicates the working of Arithemtic Progression and Probablity in real life",
      "Collaborating with the school administration for the entreprenure challenges",
      "Implemented Computer Science Knowledge in making a program to write blogs",
      "Participation in many technical session to learn more about Computer science",
    ],
  },
  {
    title: "Secondary School",
    company_name: "Little Flower Public Senior Secondary School, India",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "May 2021 - March 2022",
    points: [
      "Learned Biology, Mathematics, Chemistry and physics with proficiency and created real life example usign animated videos",
      "Collaborated with a School to organise Melange as director of the evenet",
      "Implemented Blogging Page to a website which can help the user to blog about their work",
      "Participation in computer science fairs and also volunterred in many Study fairs",
    ],
  },
  {
    title: "Bachelors Degree",
    company_name: "Conestoga College, Canada",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 20223- Present",
    points: [
      "Learning about the computer Science along with making projects related to the subject for better understanding",
      "Collaborating with classmates as a group for making project which will help the user to find their passsion",
      "Implemented a AdobeXd desgin which is realted to the spotify and which is a high fidelty prototype",
      "Working on Projects which can help the user to find their passion while working on it",
    ],
  },
  {
    title: "JEE Rank",
    company_name: "Indian Institute of Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2022",
    points: [
      "Got 221 Rank in JEE (Join Entrance Examination)",
      "Volunterred in teaching camps to teach students how to score and what should be the main approach",
      "Got Highest Percentile in the Maths and Physics",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "WORK ON IT...",
    name: "ABC",
  },
  {
    testimonial:
      "WORK ON IT",
    name: "ABC",
  },
  {
    testimonial:
      "Work on it",
    name: "ABC",
  },
];

const projects = [
  {
    name: "Book Scope",
    description:
      "Web-based book review in which user can give review about the book which and the algorithm of the page will understand the review and that will add that book into some cateogry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify Replica",
    description:
      "In this users can write a story and other people can read and text the author of that story/quote and also they can comment on the samee thing to mention the improvements without giving actual identity",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "PassionAte ",
    description:
      "It is is a Unique Website which can help the user to find their passion and for that the user is forced to try it out. This application will allow the user to get a taste of every job so that they can decide their passion",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
