import {
	PiLinktreeLogoBold,
	PiLinkedinLogoBold,
	PiGithubLogoBold,
	PiInstagramLogoBold,
	PiEnvelopeSimpleBold
} from 'react-icons/pi';

class SocialMedia {
	constructor(name, icon, link, target) {
		this.name = name;
		this.icon = icon;
		this.link = link;
		this.target = target
	}
}

const links = [
	new SocialMedia('LinkedIn', PiLinkedinLogoBold, 'https://www.linkedin.com/in/carlos-sanchez-recio-77a286243/', '_blank'),
	new SocialMedia('LinkTree', PiLinktreeLogoBold, 'https://linktr.ee/charlymech', '_blank'),
	new SocialMedia('GitHub', PiGithubLogoBold, 'https://github.com/CharlyMech', '_blank'),
	new SocialMedia('Instagram', PiInstagramLogoBold, 'https://www.instagram.com/charly.mech/', '_blank'),
	new SocialMedia('Mail', PiEnvelopeSimpleBold, 'mailto:sanchezreciocarlos99@gmail.com', '_self'),
];

export default links;