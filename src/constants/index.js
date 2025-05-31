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
  emoksha,
  qnext,
  wildfire,
  xintra,
  threejs,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Webflow Developer",
    icon: backend,
  },
  {
    title: "Framer Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Victoria's Secret",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2024 - Apr 2025",
    points: [
      "Led development of dynamic product listing pages for a global e-commerce platform using React.js and Redux.",
      "Implemented accessibility best practices (WCAG 2.1) to ensure inclusive design across all web interfaces.",
      "Worked with backend APIs to integrate real-time inventory, pricing, and promotions features.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Infosys",
    icon: web,
    iconBg: "#383E56",
    date: "Nov 2021 - Jan 2024",
    points: [
      "Delivered front-end solutions for enterprise-level clients in domains such as banking and healthcare.",
      "Built reusable component libraries with TypeScript and Storybook to support multiple product teams.",
      "Performed performance optimization and security hardening of client-side codebases.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Caliper Business Solutions",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Sep 2021",
    points: [
      "Built modular dashboards and analytics panels for internal business intelligence tools.",
      "Migrated legacy jQuery codebases to modern React.js implementations with improved maintainability.",
      "Integrated charting libraries like Chart.js and D3.js for real-time KPI visualizations.",
    ],
  },
  {
    title: "Vue Developer",
    company_name: "ProcMeet",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed procurement and vendor management interfaces using Vue 3 and Vuex.",
      "Integrated third-party APIs for digital signature workflows and document validation.",
      "Collaborated with QA teams to automate testing using Cypress and Jest.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "MySchoolPage",
    icon: web,
    iconBg: "#E6DEDD",
    date: "July 2019 - Feb 2020",
    points: [
      "Developed student-facing dashboards for an online tutoring platform using React.js.",
      "Optimized lesson booking flows and integrated live session scheduling via third-party APIs.",
      "Implemented role-based UI rendering for students, tutors, and admins.",
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
    name: "Xintra Labs",
    description:
      "A B2B cybersecurity team training and upskilling company serving across energy, finance and government sectors.",
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
    image: xintra,
    source_code_link: "https://www.xintra.org/",
  },
  {
    name: "Qnext AI",
    description:
      "A Generative AI platform for enterprise, we can provide you customized solution to help improve your user engagement.",
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
    image: qnext,
    source_code_link: "https://www.qnext.ai/",
  },
  {
    name: "Emoksha Landing",
    description:
      "A B2B Data science and AI company that provides data-driven solutions for businesses.",
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
    image: emoksha,
    source_code_link: "https://emokshallc.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
