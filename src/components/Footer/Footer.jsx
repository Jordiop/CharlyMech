import style from './Footer.module.css' //!
import links from '/src/models/SocialMedia.js'
import navigationItems from '../../models/NavigationItem';
import { CMSubtitle, SeparationBar } from '../components';
import useNavigationStore from '../../stores/navigationStore'; //!

function Footer() {
	const { page, setPage } = useNavigationStore();

	return (
		<>
			<div className={style.Footer}>
				<div className={style.FooterContent}>
					<div className={style.Links}>
						<div className={style.FooterNavigation}>
							<ul className={style.FooterNavigationList}>
								{
									navigationItems.map((item, index) => (
										<CMSubtitle bold={false} fontSize={18} key={index}>
											<span className={`${style.FooterNavigationItem} ${page === item.name ? `${style.active}` : ''}`} onClick={() => setPage(item.name)}>{item.name}</span>
										</CMSubtitle>

									))
								}
							</ul>
						</div>
						<div className={style.SocialMedia}>
							<ul className={style.SocialMediaList}>
								{
									links.map((link, index) => (
										<a href={link.link} target={link.target} key={index} className={style.SocialMediaAnchor}>
											<li>
												<span className={style.Social}>
													<link.icon />
												</span>
											</li>
										</a>
									))
								}
							</ul>
						</div>
					</div>
					<div className={style.FooterSeparationBar}><SeparationBar opacity={0.6} /></div>
					<div className={style.CopyRight}>
						<CMSubtitle bold={false} fontSize={16}>© 2024 Carlos Sánchez Recio. All rights reserved.</CMSubtitle>
					</div>
				</div>
			</div >
		</>
	);
}

export default Footer