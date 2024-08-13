import navigationItems from '../../models/NavigationItem'; //!
import useNavigationStore from '../../stores/navigationStore'; //!
import style from './NavigationBar.module.css'; //!

function NavigationBar() {
	const { page, setPage } = useNavigationStore();

	return (
		<>
			<div className={style.NavigationBar}>
				<ul className={style.NavigationList}>{
					navigationItems.map((item, index) => (
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