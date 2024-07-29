import { ProjectLink, ProjectLinkType } from './ProjectLink';
import { languages, frameworks } from './TechSkill.js';

class Project {
	constructor(title, developing, techs, shortDescr, description, links, imgSrc) {
		this.title = title;
		this.developing = developing;
		this.techs = techs;
		this.shortDescr = shortDescr;
		this.description = description;
		this.links = links;
		this.imgSrc = imgSrc;
	}
}

const projects = [
	new Project('FlutterDex',
		true,
		[languages['dart'], frameworks['flutter']],
		"Pokemon themed cross-platform app to display several pokemon data like items, region information, etc.",
		"TODO",
		[new ProjectLink(ProjectLinkType.GITHUB, "https://github.com/CharlyMech/FlutterDex")],
		"/assets/img/projects/flutterdex_project_box.png"),
	new Project(
		'GengarAPI',
		true,
		[languages['kotlin'], frameworks['spring-boot']],
		'API designed for FlutterDex project to provide formatted data from PokeAPI as source of data.',
		"TODO",
		[new ProjectLink(ProjectLinkType.GITHUB, 'https://github.com/CharlyMech/gengar')],
		'/assets/img/projects/gengarapi_project_box.png'),
	new Project(
		'ToBook App',
		false,
		[languages['java']],
		'Swing designed app that allows you to mark your favourite and read books from a catalog (OpenLibra API as source and data auto-saved in MySQL database).',
		'TODO',
		[new ProjectLink(ProjectLinkType.GITHUB, 'https://github.com/CharlyMech/ToBook-App')],
		'/assets/img/projects/tobook_app.png'),
]

export { projects };