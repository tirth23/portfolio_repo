import {
	FaXTwitter,
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaDiscord,
	FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const NAVIGATION_LINKS = [
	{ label: "Bio", href: "#bio" },
	{ label: "Work Experience", href: "#work" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
	{ label: "Resume", href: "/Tirth_Patel_Resume.pdf" },
];

export const HERO = {
	name: "Tirth Patel",
	greet: "Hello there!",
	description:
		"I am passionate Software Developer skilled in crafting robust, user-centric web applications. With a focus on continuous learning and innovation, I deliver high-quality solutions that elevate user experiences and drive business growth.",
};

export const PROJECTS = [
	{
		id: 1,
		name: "Personal Portfolio",
		description:
			"A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
		image: projectImage1,
		githubLink: "https://github.com/tirth23/portfolio_repo",
	},
	{
		id: 2,
		name: "Blogger",
		description:
			"A React-based blog platform where users can create, update, and delete blogs. Utilized mock JSON Server and RESTful API, ensuring a seamless user experience.",
		image: projectImage2,
		githubLink: "https://github.com/tirth23/react-project-0.1",
	},
	{
		id: 3,
		name: "Twittery",
		description:
			"A Streamlit app using Python and the Twitter API for real-time sentiment analysis, categorizing tweets and identifying frequently used positive and negative words for deeper insight into text data.",
		image: projectImage3,
		githubLink: "https://github.com/tirth23/Twittery",
	},
	{
		id: 4,
		name: "Weather App",
		description:
			"A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with Node.js, express.js",
		image: projectImage4,
		githubLink:
			"https://github.com/tirth23/webdev-projects/tree/main/WeatherProject",
	},
	{
		id: 5,
		name: "Todo List",
		description:
			"A Todo list app built with Node.js, express.js and MongoDB. Utilized Mongoose for database interactions and EJS for templating.",
		image: projectImage5,
		githubLink:
			"https://github.com/tirth23/webdev-projects/tree/main/todlist-v3",
	},
	{
		id: 6,
		name: "Newsletter-Signup",
		description:
			"A Newsltter signup app built with Node.js, express.js and Mailchimp where users can sign up for newsletters.",
		image: projectImage6,
		githubLink:
			"https://github.com/tirth23/webdev-projects/tree/main/Newsletter-Signup",
	},
];

export const BIO = [
	"A versatile Software Developer with an eye for design, I expertly merge technical expertise with creative vision to craft exceptional digital experiences. Driven by a passion for continuous learning, I am dedicated to exploring emerging technologies and pushing the boundaries of frontend development.",
	"With a robust foundation in HTML, CSS, and JavaScript, complemented by expertise in modern frameworks like React.js, I excel in delivering high-performance, visually stunning web applications that seamlessly align with user needs and business objectives.",
	"Currently, I am contributing to the world's largest IT company, Accenture, as a Software Engineer. My work involves harnessing cutting-edge technologies to drive innovation and deliver exceptional user experiences. I play a pivotal role in developing frontend and maintaining Accenture leading GenAI product ",
];

export const SKILLS = [
	{
		icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
		name: "React",
		experience: "3+ years",
	},
	{
		icon: <IoLogoJavascript className="text-4xl text-yellow-200 lg:text-5xl" />,
		name: "JavaScript",
		experience: "3+ years",
	},
	{
		icon: <BiLogoTypescript className="text-4xl text-sky-500 lg:text-5xl" />,
		name: "TypeScript",
		experience: "3+ years",
	},
	{
		icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
		name: "HTML",
		experience: "3+ years",
	},
	{
		icon: <IoLogoCss3 className="text-4xl text-sky-400 lg:text-5xl" />,
		name: "CSS",
		experience: "3+ years",
	},
	{
		icon: <SiSass className="text-4xl text-pink-300 lg:text-5xl" />,
		name: "SCSS",
		experience: "3+ years",
	},
	{
		icon: <RiTailwindCssFill className="text-4xl text-sky-300 lg:text-5xl" />,
		name: "Tailwind CSS",
		experience: "3+ years",
	},
	{
		icon: <SiHandlebarsdotjs className="text-4xl text-white lg:text-5xl" />,
		name: "Handlebar.js",
		experience: "3+ years",
	},
	{
		icon: <SiRedux className="text-4xl text-[#764abc] lg:text-5xl" />,
		name: "Redux",
		experience: "1+ year",
	},
	{
		icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
		name: "Node.js",
		experience: "1+ year",
	},
	{
		icon: <SiMysql className="text-4xl text-sky-500 lg:text-5xl" />,
		name: "MySQL",
		experience: "1+ year",
	},
	{
		icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
		name: "MongoDB",
		experience: "1+ year",
	},
	{
		icon: <FaJava className="text-4xl text-white lg:text-5xl" />,
		name: "Core Java",
		experience: "1+ year",
	},
	{
		icon: <FaGit className="text-4xl text-[#f14e32] lg:text-5xl" />,
		name: "Git",
		experience: "3+ years",
	},
	{
		icon: <FaGithub className="text-4xl text-white lg:text-5xl" />,
		name: "Github",
		experience: "3+ years",
	},
	{
		icon: <SiJira className="text-4xl text-sky-500 lg:text-5xl" />,
		name: "JIRA",
		experience: "3+ years",
	},
];

export const EXPERIENCES = [
	{
		title: "Software Engineer",
		company: "Accenture",
		duration: "July 2021 - Present",
		description: `<div>Client: GMA</div>
    <ul style="list-style-type:disc">
        <li>Played a pivotal role in developing the Generative Market Analysis (GMA) product which is part of Accenture&apos;s 
        Gen AI capabiilty, enabling Oracle Cloud Infrastructure with real-time market research updates, executive strategy briefings, 
        and on-demand strategic insights.</li>
        <li>Spearheaded the front-end development of a high-performance, responsive UI for the GMA tool using React.js and TypeScript, 
        that helped leadership enhance proposal initiation and project execution by providing tailored growth strategies through detailed 
        data analysis to address specific client needs.</li>
        <li>Optimized application performance through the strategic implementation of lazy loading, code splitting, custom react hooks, 
        resulting in a substantial 30&#37; improvement in initial load time, ensuring a seamless user experience and enhancing 
        user engagement.</li>
        <li>Integrated Nivo network graphs based on D3.js for enhanced data-driven insights on industry trends and
        sources, which help reduced decision making time for leadership by 20&#37;.</li>
        <li>Developed reusable UI components adhering to WCAG 2 Level AA accessibility standards and BEM methodology using 
        semantic HTML, CSS, JavaScript contributing to a more inclusive product and reducing code maintenance time.</li>
        <li> Developed a component tracing feature in the Fabricator UI toolkit, enabling identification of 300+ components 
        across 100+ pages, reducing search time by 25&#37;  and streamlining team workflows.</li>
        <li>Collaborated with backend team to implement a real-time data communication system using WebSocket and React Chatbot Kit library, integrating Accenture CORE DB and OpenAI API. This solution ensured seamless,
        bidirectional communication while mitigating CSRF vulnerabilities and safeguarding data protection.</li>
      </ul>
      &nbsp;
      <div>Client: British Telecom</div>
      <ul style="list-style-type:disc">
        <li>Led a team in executing comprehensive end-to-end test scenarios for the Voice product, identifying and reporting 12+ critical
        business defects.</li>
        <li>Automated test cases using CATS tool to streamline regression testing, significantly reducing testing time.</li>
      </ul>
      `,
	},
	{
		title: "ML Intern",
		company: "Knowledge Solutions India",
		duration: "June 2020 - July 2020",
		description: `<ul style="list-style-type:disc"><li>As ML intern, I build Models based on Linear Regression, KNN Algorithm, Decision Tree Algorithm,
      Random Forest Regression. Created Supervised Machine Learning Model which predicted Chance of Admit in university with 88.3&#37; 
      accuracy.</li></ul>`,
	},
];

export const EDUCATION = [
	{
		degree: "Bachelor of Engineering in Computer Engineering",
		institution: "Gujarat Technological University",
		duration: "July 2017 - July 2021",
		description:
			"Specialized in Computer Engineering and graduated with CGPA 9.25/10.",
	},
];

export const SOCIAL_MEDIA_LINKS = [
	// {
	// 	href: "https://x.com/",
	// 	icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
	// },
	// {
	// 	href: "https://x.com/",
	// 	icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
	// },
	// {
	// 	href: "https://x.com/",
	// 	icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
	// },
	// {
	// 	href: "https://x.com/",
	// 	icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
	// },
	{
		href: "mailto:tirthpatel23t@gmail.com",
		icon: <SiGmail fontSize={25} className="hover:opacity-80" />,
	},
	{
		href: "https://github.com/tirth23",
		icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
	},
	{
		href: "https://www.linkedin.com/in/tirth23/",
		icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
	},
];
