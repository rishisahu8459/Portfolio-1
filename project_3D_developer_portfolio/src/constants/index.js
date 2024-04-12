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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ghrcelogo,
  robo,
  dplogo,
  SparksLogo,
  mylogo,

  android,
  java,
  cpp,
  python,
  hydro,
  store,
  noteapp,
  shorturl,


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "android",
    icon: android,
  },

  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Mobicore Infotech Pvt. Ltd.",
    icon: robo,
    iconBg: "white",
    date: "December 2023 - May 2024*",
    points: [
      "Developing cutting-edge features and functionalities, resulting in a remarkable 70% boost in system performance by minimising inter-system delays.",
      "Responsible for the migration initiative of an old system from MVC architecture to MVVM architecture,successfully reducing system load by an impressive 50-60%. This transition also heightened system testing capabilities and overall upgradability.",
      "Conducted Unit and Load testing, debugged issues, and documented solutions, ensuring a robust and reliable system.",
          ],
  },
  {
    title: "Android Developer",
    company_name: "Sparks Foundation",
    icon: SparksLogo,
    iconBg: "white",
    date: "December 2022 - January 2023",
    points: [
      "Developed an Android Application for this internship for banking.",
      "Developing products, Writing Documentation with multiple technologies with code review, Debugging practices and Independent research for Possible features making the production Systems Robust and reliable.",
      "Recording Transactions, improving Application Security, Sending Money, Splash Screen, used inbuilt Database.",
    ],
  },
  {
    title: "Bachelor of Technology - Computer Science and Engineering",
    company_name: "G.H. Raisoni College of Engineering, Nagpur",

    icon: ghrcelogo,
    iconBg: "white",
    date: "December 2021 - June 2024*",
    points: [
        "Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, Software Engineering, Object-Oriented Programming, and Design Patterns.",
         ],
  },
  {
    title: "Diploma - Computer Technology",
    company_name: "Dharampeth Polytechnic, Nagpur",
    icon: dplogo,
    iconBg: "white",
    date: "August 2019 - June 2021",
    points: [
      "Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, Software Engineering, Object-Oriented Programming.",  
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Hydroponics System",
    description:
      "A Hydroponics IoT System using ESP32 SOC, Relay Modules and Set of Different Sensors to create a System for control and Monitoring of Hydroponics System and seamlessly integrating mobile devices through an Android based client.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "embedded systems",
        color: "green-text-gradient",
      },
      {
        name: "esp-32",
        color: "pink-text-gradient",
      },
      {
        name: "IoT",
        color: "green-text-gradient",
      },
    ],
    image: hydro,
    source_code_link: "https://github.com/Riya-t-21/Smart-Hydroponics-IoT-System",
  },
  {
    name: "Apparel Store with Dashboard and CMS",
    description:
      "Developed a Dashboard and CMS using Next.js, Javascript and Mysql to manage multiple stores. Impressive UI and UX and highly responsive and scalable application. Integrated Payment Gateway using Stripe, and Admin Dashboard which can work with multiple stores using Clerk for authentication.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      
    ],
    image: store,
    source_code_link: "https://github.com/Riya-t-21/Ecommerce-Apparel-Store",
  },
  {
    name: "Link Shortener App",
    description:
      "Developed an Android application as a dashboard and a client to show the Statistics is used to shorten the long URL and share it with others. It also has a feature to track the statistics of the shortened URL.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "mvvm",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: shorturl,
    source_code_link: "https://github.com/Riya-t-21/OpenInApp-Project",
  },
  {
    name: "Note Taking App",
    description:
      "Designed a Note Taking Web application. It is highly responsive and scalable. It has a feature to add, edit, delete, and share notes with others. It also has a feature to add labels to notes and search notes based on labels.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      
    ],
    image: noteapp,
    source_code_link: "https://github.com/Riya-t-21/NoteApp1",
  },
];

export { services, technologies, experiences, testimonials, projects };
