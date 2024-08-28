import PropTypes from 'prop-types';
import style from './CMCard.module.css';

function CMCard({ width = 'fit-content', height = 'fit-content', borderRadius = '5px', padding = '1em', margin = '0 auto', children }) {
	const customStyle = {
		width: width,
		height: height,
		borderRadius: borderRadius,
		padding: padding,
		margin: margin
	};
	return (
		<>
			<div className={style.CardContainer} style={customStyle}>
				{children}
			</div>
		</>
	);
}

CMCard.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	borderRadius: PropTypes.string,
	padding: PropTypes.string,
	margin: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default CMCard;