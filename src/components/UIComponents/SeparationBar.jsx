import PropTypes from 'prop-types';

const SeparationBar = ({ width, height = 1, bgColor = '#989898' }) => {
	const style = {
		width: width,
		height: height,
		backgroundColor: bgColor,
	};

	return <div style={style}></div>;
};

SeparationBar.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number,
	bgColor: PropTypes.string,
};

export default SeparationBar;