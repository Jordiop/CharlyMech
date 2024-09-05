import { SiGithub } from "react-icons/si";
import { IoIosLink } from "react-icons/io";

const ProjectLinkType = Object.freeze({
	GITHUB: { icon: SiGithub, name: 'GitHub' },
	WEB: { icon: IoIosLink, name: 'Web' },
});

class ProjectLink {
	constructor(type, url) {
		this.type = type;
		this.url = url;
	}
}

export { ProjectLink, ProjectLinkType };