import PropTypes from 'prop-types';
import style from './IconedLabel.module.css'

function IconedLabel({ icon, name, bgColor = '#989898', fontColor = '#111111', borderRadius = '10px', height = '30px', clickable = false }) {
	const IconComponent = icon;
	const labelStyle = {
		color: fontColor,
		backgroundColor: bgColor,
		borderRadius: borderRadius,
		height: height,
		cursor: clickable ? 'pointer' : 'auto',
	}
	return (
		<>
			<div style={labelStyle} className={style.IconedLabel}>
				<IconComponent className={style.LabelIcon} />
				<h4>{name}</h4>
			</div>
		</>
	)
}

IconedLabel.propTypes = {
	icon: PropTypes.elementType.isRequired,
	name: PropTypes.string.isRequired,
	bgColor: PropTypes.string,
	fontColor: PropTypes.string,
	borderRadius: PropTypes.string,
	height: PropTypes.string,
	clickable: PropTypes.bool,
}

export default IconedLabel;