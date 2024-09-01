import {
	HiOutlineChatBubbleLeftEllipsis,
	HiOutlineHome,
	HiOutlineUser,
	HiOutlineWrenchScrewdriver
} from "react-icons/hi2";

class NavigationItem {
	constructor(name, icon, link) {
		this.name = name;
		this.icon = icon;
		this.link = link;
	}
}

const navigationItems = [
	new NavigationItem('home', HiOutlineHome),
	new NavigationItem('skills', HiOutlineWrenchScrewdriver),
	new NavigationItem('about', HiOutlineUser),
	new NavigationItem('contact', HiOutlineChatBubbleLeftEllipsis),
];

export default navigationItems;