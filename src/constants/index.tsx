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
    freelancer,
    lytfix,
    theBand,
    golang,
    nextjs,
    postgresql,
    mobileApp,
    monopoly,
    haaya,
    afya101,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Frontend Creator",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Next Js",
      icon: nextjs,
    },
    {
      name: "Mobile App Development",
      icon: mobileApp,
    },
    {
      name: 'golang',
      icon: golang
    }
  ];
  
  const experiences = [
    {
      title: "Fullstack Software Developer",
      company_name: "Freelancer",
      icon: freelancer,
      iconBg: "#383E56",
      date: "January 2022 - August 2022",
      points: [
        "Worked on both frontend and backend development of client projects.",
        "Collaborated with colleagues to create user interfaces and improve user experience using React.",
        "Developed and maintained server side logic by building RESTful APIs using the Node.js and MongoDB.",
        "Build interactive mobile applications using React Native and Flutter.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Lytfix Technology Solutions",
      icon: lytfix,
      iconBg: "#383E56",
      date: "August 2022 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Enhancing application performance, streamlining backend procedures, and guaranteeing smooth platform integration",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Chief Information Officer",
      company_name: "The Tech Band Originals",
      icon: theBand,
      iconBg: "#383E56",
      date: "April 2024 - Present",
      points: [
        "Setting the technology vision and strategy for the company, ensuring that all systems support business goals.",
        "Overseeing major projects from inception to delivery, including budgeting, timelines, and resource allocation.",
        "Leading both frontend and backend development, with proficiency in React JS, React Native, NextJS, NodeJS, GoLang, PostgreSql, and MongoDB.",
        "Working with external vendors or partners to procure software or hardware and managing relationships.",
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
      name: "Monopoly",
      description:
        "Web-based platform that allows users to play monopoly online with friends.",
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
      image: monopoly,
      source_code_link: "https://monopoly-gaming.web.app",
    },
    {
      name: "Haaya",
      description:
        "Web application that enables people to hire their items to intereseted individuals.",
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
          name: "node-js",
          color: "green-text-gradient",
        },
      ],
      image: haaya,
      source_code_link: "https://www.haaya.co.ke",
    },
    {
      name: "Afya101",
      description:
        "A health based web application that helps users track their health and get advice from professionals.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: afya101,
      source_code_link: "https://afya101.co.ke",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };