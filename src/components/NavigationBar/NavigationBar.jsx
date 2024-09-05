import navigationItems from '../../models/NavigationItem'; //!
import useNavigationStore from '../../stores/navigationStore'; //!
import style from './NavigationBar.module.css'; //!

function NavigationBar() {
	const { page, setPage } = useNavigationStore();

	return (
		<>
			<div className={style.NavigationBar}>
				<ul className={style.NavigationList}>{
					navigationItems.map((item, index) => {
						const NavigationItem = item.icon;
						return (<li
							className={`${style.NavigationItem} ${page === item.name ? `${style.active}` : ''}`} key={index}
							onClick={() => setPage(item.name)}
						>
							<span className={style.NavigationItemClickable}>{<NavigationItem className={style.NavigationItemIcon} />}{item.name}</span>
						</li>)

					})
				}</ul>
			</div >
		</>
	);
}

export default NavigationBar