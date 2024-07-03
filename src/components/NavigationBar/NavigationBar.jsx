import NavigationItem from '../../models/NavigationItem'; //!
import style from './NavigationBar.module.css'; //!

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
			<div className={style.NavigationBar}>
				<ul className={style.NavigationList}>{
					items.map((item, index) => (
						<li className={style.NavigationItem} key={index}>
							<span>{item.name}</span>
						</li>
					))
				}</ul>
			</div >
		</>
	);
}

export default NavigationBar