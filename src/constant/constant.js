import project1 from "../assets/images/Project1.png"
import project2 from "../assets/images/Project2.png"
import work from "../assets/images/Work.png"
import {FaReact,FaNodeJs, FaFigma} from "react-icons/fa"

export const projects = [
    {
        projectName : 'Crypto Rush',
        description : "React based application capable of providing information of about 100 cryptocurrencies present in the world. Information it provide is quite useful for investors, such as — current price, total market capital, 24hvolume, supply, etc.",
        techStack : "React  CSS Material UI Vs Code API ",
        thumbnail : project1,
        live: "https://cryptorushh.netlify.app/",
        repo: "https://github.com/Abh1shekSingh/CryptoRush"
    },
    {
        projectName : 'Open Dev Cons',
        description : "React based application especially made for passaionate begineer developer for practicing their developing sills by building some of the real life project. Devloper can visit the website and login to get started with forking repositories which contain setup code of the project.",
        techStack : "React  CSS Material UI Vs Code Razorpay",
        thumbnail : project2,
        live:"https://modest-jackson-89e223.netlify.app/",
        repo:"https://github.com/Abh1shekSingh/OpenDevCons-Frontend"
    },
    {
        projectName : 'Android Developer Portfolio',
        description : "Next JS based android developer portfolio showing is skills, personnel achievements and some of the project that he has made. This project was my first freelance work.",
        techStack : "Next Tailwind CSS Material UI Vs Code ",
        thumbnail : work,
        live:"https://client-portfolio-nine.vercel.app/",
        repo:"https://github.com/Abh1shekSingh/Client_Portfolio"
    },
    {
        projectName : 'Code Karo',
        description : "React based web application capabel of providing information of upcoming coding contest on some of the famous coding sites such as — Leetcode, Codeforces, Codechef, AtCoder and etc. ",
        techStack : "React  tailwind CSS Material UI Vs Code API",
        thumbnail : project1,
        live:"https://codeekaro.netlify.app",
        repo:"https://github.com/Abh1shekSingh/Codekaro"
    },
]


export const technologies = [
    {
        phase: "Front-End",
        logo: <FaReact className="text-2xl" />,
        description: "I ❤️ carving my frontend using React itself along with tailwind CSS. Sometimes, I also use Material UI to render clean components."
    },
    {
        phase: "Back-End",
        logo: <FaNodeJs className="text-2xl" />,
        description: "Experience with NodeJS for managing the backend of applications. Manage database with help of mongo DB / firebase."
    },
    {
        phase: "Designing",
        logo: <FaFigma className="text-2xl" />,
        description: "Before developing my web apps, I ❤️ to design them first, for that I use figma tool."
    }
]

export const TimeLineData = [
    { year: 2017, text: 'Completed Class 12th From Kendriya Vidyalaya', },
    { year: 2022, text: 'Persued my B.Tech from Delhi Technical University', },
    { year: "Feb 2021", text: 'Worked with Digital Register as An SDE Intern', },
    { year: "May 2021", text: 'Worked with 365 Labs as an SDE Intern', },
    { year: 2021, text: 'Got an Oppurtunity To work as Full Time SDE @ Urban Company', },
  ];