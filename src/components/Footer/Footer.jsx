import className from './Footer.module.css' //!

function Footer() {
	return (
		<>
			<div className={className.Footer}>
				<div className={className.FooterContent}>
					<h3>Pages</h3>
					<ul className={className.Pages}>
						<li>Home</li>
						<li>My skills</li>
						<li>About me</li>
						<li>Contact me</li>
					</ul>
				</div>
				<div className={className.CopyRight}>
					<p>© 2024 Carlos Sánchez Recio. All rights reserved.</p>
				</div>
			</div>
		</>
	);
}

export default Footer