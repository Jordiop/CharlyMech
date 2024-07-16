import NavigationItem from '../../models/NavigationItem'; //!
import useNavigationStore from '../../stores/navigationStore'; //!
import style from './NavigationBar.module.css'; //!

function NavigationBar() {
	// Temporary data for each navigation item
	const items = [
		new NavigationItem('home', 'ICON', 'LINK'),
		new NavigationItem('skills', 'ICON', 'LINK'),
		new NavigationItem('about', 'ICON', 'LINK'),
		new NavigationItem('contact', 'ICON', 'LINK'),
	];
	const { page, setPage } = useNavigationStore();

	return (
		<>
			<div className={style.NavigationBar}>
				<ul className={style.NavigationList}>{
					items.map((item, index) => (
						<li
							className={`${style.NavigationItem} ${page === item.name ? `${style.active}` : ''}`} key={index}
							onClick={() => setPage(item.name)}
						>
							<span>{item.name}</span>
						</li>
					))
				}</ul>
			</div >
		</>
	);
}

export default NavigationBar