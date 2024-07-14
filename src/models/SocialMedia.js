import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class SocialMedia {
	constructor(name, icon, link, target) {
		this.name = name;
		this.icon = icon;
		this.link = link;
		this.target = target
	}
}

const socialMedia = [
	new SocialMedia('LinkedIn', faLinkedin, 'https://www.linkedin.com/in/carlos-sanchez-recio-77a286243/', '_blank'),
	new SocialMedia('GitHub', faGithub, 'https://github.com/CharlyMech', '_blank'),
	new SocialMedia('Instagram', faInstagram, 'https://www.instagram.com/charly.mech/', '_blank'),
	new SocialMedia('Mail', faEnvelope, 'mailto:sanchezreciocarlos99@gmail.com', '_self'),
];

export default socialMedia;