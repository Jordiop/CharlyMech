import { DiJava } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import {
	SiPython,
	SiJavascript,
	SiTypescript,
	SiFlutter,
	SiDart,
	SiKotlin,
	SiHtml5,
	SiCss3,
	SiPhp,
	SiFastapi,
	SiCreatereactapp,
	SiReact,
	SiSpringboot,
	SiNestjs,
	SiBootstrap,
	SiDjango,
	SiAndroid,
	SiLinux,
	SiDocker,
	SiGit,
	SiMongodb,
	SiFigma,
	SiRive
} from "react-icons/si";


class TechSkill {
	constructor(icon, name, expertise, description, color) {
		this.icon = icon;
		this.name = name;
		this.expertise = expertise; // Scale from 1-5
		this.description = description;
		this.color = color
	}
}

const languages = [
	new TechSkill(DiJava, 'Java', 5, "Desktop apps, services and back-end development using several packages.", "#ED8B00"),
	new TechSkill(SiPython, 'Python', 5, "Task automation, web and back-end development using libraries like selenium, requests, etc.", "#ffde57"),
	new TechSkill(SiKotlin, 'Kotlin', 2, "Native Android apps using XML and Compose for UI, and services with SpringBoot.", "#b423ea"),
	new TechSkill(SiJavascript, 'JavaScript', 3, "Web apps development mainly used for frontend with frameworks.", "#f7df1e"),
	new TechSkill(SiTypescript, 'TypeScript', 3, "Web apps and APIs development used alongside with libraries.", "#3178c6"),
	new TechSkill(SiHtml5, 'HTML', 3, "Web development.", "#e34f26"),
	new TechSkill(SiCss3, 'CSS', 2, "Web development.", "#264de4"),
	new TechSkill(SiPhp, 'PHP', 2, "Web back-end development while studying ASIR to use CRUD methods with data bases.", "#8892be"),
	new TechSkill(SiDart, 'Dart', 3, "Cross-plarform apps with Flutter framework using several packages.", "#2bb7f6"),
];
const frameworks = [
	new TechSkill(SiFlutter, 'Flutter', 3, "Cross-platform apps with several packages like BLoC, Dio, etc.", "#04599c"),
	new TechSkill(SiCreatereactapp, 'React Navite', 1, "Currently learning.", "#26d9fd"),
	new TechSkill(SiFastapi, 'FastAPI', 2, "Test library to create high-performance APIs.", "#009688"),
	new TechSkill(SiSpringboot, 'SpringBoot', 1, "Test framework to create data source services like APIs and microservices.", "#6cb33e"),
	new TechSkill(SiNestjs, 'NestJS', 2, "Used to for maintenance and new functionalities with TypeScript.", "#ea2858"),
	new TechSkill(SiReact, 'React', 3, "First JavaScript framework/library to learn for front-end development.", "#26d9fd"),
	new TechSkill(SiBootstrap, 'Bootstrap', 2, "Learned  during ASIR course for easy and fast front-end development.", "#8411fa"),
	new TechSkill(SiDjango, 'Django', 1, "Currently learning.", "#092e20"),
];
const others = [
	new TechSkill(SiAndroid, 'Android', 2, "Basic Android configuration knowledge for native apps and use of Android Studio.", "#a4c639"),
	new TechSkill(SiLinux, 'Linux', 5, "Server administratio with several tools like Docker or using Proxmox OS.", "#232323"),
	new TechSkill(SiDocker, 'Docker', 2, "App deployment on personal home server. Basic knowledge of Compose.", "#0c49c2"),
	new TechSkill(SiGit, 'Git', 3, "Version control for projects. Maily used GitHub as service with some GitHub Actions knowledge.", "#f64d27"),
	new TechSkill(SiMongodb, 'MongoDB', 2, "Basic knowledge about how to handle CRUD operations with several languages.", "#12924f"),
	new TechSkill(TbSql, 'SQL', 4, "Configuration for several database managers and data base design.", "#00618a"),
	new TechSkill(SiFigma, 'Figma', 3, "Design minimal UI for apps, mainly focused for mobile app development.", "#ff7262"),
	new TechSkill(SiRive, 'Rive', 2, "Create simple animations, handle state machines and multiple triggers and events.", "#1d1d1d"),
];

export {
	languages,
	frameworks,
	others
};