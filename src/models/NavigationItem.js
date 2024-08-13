class NavigationItem {
	constructor(name, icon, link) {
		this.name = name;
		this.icon = icon;
		this.link = link;
	}
}

const navigationItems = [
	new NavigationItem('home', 'ICON', 'LINK'),
	new NavigationItem('skills', 'ICON', 'LINK'),
	new NavigationItem('about', 'ICON', 'LINK'),
	new NavigationItem('contact', 'ICON', 'LINK'),
];

export default navigationItems;