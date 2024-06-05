import { Link } from "react-router-dom";
import {
  beam,
  histel,
  gulamu,
  portfolio_web,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "Self Employed",
    date: "2022 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>17.000+ subscribers</span> by creating video content to promote my country Timor-Leste as well as maintain the realtions between Timor-Leste and the ASEAN countries.",
      "One of my video got more than <span style='color: white;'>300.000 views</span>, because the Indonesian language that still preserve well in Timor-Leste.",
      "Produced a good educational and entertaining videos for my subscribers <span style='color: white;'>Daily vlog, Programmers life, and the life in Indonesia and Timor-Leste</span>.",
    ],
  },
  {
    title: "Facebook Influencer",
    company_name: "Facebook",
    date: "2024 - Present",
    details: [
      "Making a educational and programming videos to my <span style='color: white;'>Timor-Leste fellows</span>.",
      "<span style='color: white;'>Making an History app</span> that allows Timorese people to learn their identity and the history anywhere, anytime with interactive experiences.",
      "Provide the place for Timorese programmers to grow and up to date with the <span style='color: white;'>latest technologies</span>.",
    ],
  },
  {
    title: "Junior Mobile Developer",
    company_name: "Freelance",
    date: "2024 - Present",
    details: [
      "Making a freelancer projects of Mobile and website as a <span style='color: white;'>full-stack software engineer</span>.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with my team and friends</span> to design and implement the product in the community and follow some several competitions.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "Telkom University",
    date: "2022 - 2026",
    details: [
      "As an international students majoring Informatics in Telkom University International class batch of <span style='color: white;'>2022</span>.",
      "As an active students that follow some several communities, organizations and laboratories in Telkom <span style='color: white;'>University</span>.",
      "Being nominated as a <span style='color: white;'>Mahasiswa of the year</span> in 2022 among Informatics faculty.",
    ],
  },
];

const portfolio = [
  {
    name: "Histel App",
    description:
      "A Timor-Leste history app that made using flutter, consist by interactive learning curriculum that, allow the users to learn history through articles, docoumentation, seeing the historical places and make the quiz.",
    image: histel,
    link:  "https://github.com/Mr-Roma/Histel_App.git"
  },
  {
    name: "Gulamu App",
    description:
      "A first hackathon competition project that made by my team, to help the users to tracking their sugar tha come to their body in real time. During this application project i am as an the Team Lead as well the Mobile Programmer in my team.",
    image: gulamu,
    link: "https://github.com/Mr-Roma/GULAMU.git"
  },
  {
    name: "Portfolio Website",
    description:
      "This is my first Website that i made using Flutter, and was inspirated by the terminal design, in this Portfolio you users can interact with the website by give a command line during the interactions.",
    image: portfolio_web,
    link: "https://github.com/Mr-Roma/MyPortfolio.git"
  },
  {
    name: "Beam App UI/UX",
    description:
      "One of my Final Project design of Beam App, with some improvements feature, in Interaction of Human & Computer Design.",
    image: beam,
    link: "https://github.com/Mr-Roma/MyPortfolio.git"
  },
  
];

export { experiences, portfolio };

