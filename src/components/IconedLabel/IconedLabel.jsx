import PropTypes from 'prop-types';
import style from './IconedLabel.module.css'

function IconedLabel({ icon, name, bgColor = '#989898', fontColor = '#111111', borderRadius = '10px', height = '30px', href }) {
	const IconComponent = icon;
	const labelStyle = {
		color: fontColor,
		backgroundColor: bgColor,
		borderRadius: borderRadius,
		height: height,
		cursor: href ? 'pointer' : 'auto',
	}
	if (href) {
		return (
			<>
				<a className={style.IconedLabelLink} href={href} target='_blank'>
					<div style={labelStyle} className={style.IconedLabel}>
						<IconComponent className={style.LabelIcon} />
						<h4>{name}</h4>
					</div>
				</a>
			</>
		)
	} else {
		return (
			<>
				<div style={labelStyle} className={style.IconedLabel}>
					<IconComponent className={style.LabelIcon} />
					<h4>{name}</h4>
				</div>
			</>
		)
	}
}

IconedLabel.propTypes = {
	icon: PropTypes.elementType.isRequired,
	name: PropTypes.string.isRequired,
	bgColor: PropTypes.string,
	fontColor: PropTypes.string,
	borderRadius: PropTypes.string,
	height: PropTypes.string,
	href: PropTypes.string,
}

export default IconedLabel;