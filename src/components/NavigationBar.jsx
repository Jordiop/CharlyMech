import { Container } from '@mui/material';
import '/src/styles/NavigationBar.css'
import NavigationItem from '../models/NavigationItem';

export default function NavigationBar() {
	// Temporary data for each navigation item
	const items = [
		new NavigationItem('Home', 'ICON', 'LINK'),
		new NavigationItem('Skills', 'ICON', 'LINK'),
		new NavigationItem('About', 'ICON', 'LINK'),
		new NavigationItem('Contact', 'ICON', 'LINK'),
	];

	return (
		<>
			<Container maxWidth="false" sx={{
				ul: {
					listStyleType: 'none',
					padding: 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					backgroundColor: '#393C4050',
					borderRadius: 7.5,
					boxShadow: 5,
					backdropFilter: 'blur(10px)'
				},
				li: {
					color: '#FAFAFA',
					opacity: 0.5,
					fontWeight: 'bold',
					cursor: 'pointer',
					'&:hover': {
						opacity: 1,
					},
				},
				width: '750px',
				height: '100px',
				backgroundColor: 'transparent',
				position: 'absolute',
				top: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 1,
			}}>
				<ul>{
					items.map((item, index) => (
						<li key={index}>
							<span>{item.name}</span>
						</li>
					))
				}</ul>

			</Container >
		</>
	);
}