import { Container } from '@mui/material';
import NavigationItem from '../models/NavigationItem'; //!
import '../styles/NavigationBar.css'; //!

function NavigationBar() {
	// Temporary data for each navigation item
	const items = [
		new NavigationItem('Home', 'ICON', 'LINK'),
		new NavigationItem('Skills', 'ICON', 'LINK'),
		new NavigationItem('About', 'ICON', 'LINK'),
		new NavigationItem('Contact', 'ICON', 'LINK'),
	];

	return (
		<>
			<nav className="NavAppbar">
				<Container disableGutters maxWidth={false} className="Nav">
					<ul>{
						items.map((item, index) => (
							<li key={index}>
								<span>{item.name}</span>
							</li>
						))
					}</ul>

				</Container >
			</nav>
		</>
	);
}

export default NavigationBar