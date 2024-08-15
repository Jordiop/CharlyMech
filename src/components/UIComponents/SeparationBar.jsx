import PropTypes from 'prop-types';

const SeparationBar = ({ width, height = 1, bgColor = '#989898', opacity = 1, className }) => {
	const style = {
		width: width ? width : '100%',
		height: height,
		backgroundColor: bgColor,
		opacity: opacity,
	};

	return <div style={style} className={className}></div>;
};

SeparationBar.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	bgColor: PropTypes.string,
	opacity: PropTypes.number,
	className: PropTypes.string,
};

export default SeparationBar;