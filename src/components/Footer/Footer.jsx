import style from './Footer.module.css' //!
import socialMedia from '../../models/SocialMedia'; //!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
	return (
		<>
			<div className={style.Footer}>
				<div className={style.SocialMedia}>
					<ul className={style.SocialMediaList}>
						{
							socialMedia.map((social, index) => (
								<li className={style.Social} key={index}>
									<a href={social.link} target={social.target}>
										<span><FontAwesomeIcon icon={social.icon} /></span> {social.name}
									</a>
								</li>
							))
						}
					</ul>
				</div>
				<div className={style.CopyRight}>
					<p>© 2024 Carlos Sánchez Recio. All rights reserved.</p>
				</div>
			</div>
		</>
	);
}

export default Footer