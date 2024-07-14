import PropTypes from 'prop-types';

const CMSubtitle = ({ fontSize = 24, color = '#989898', bold = true, children }) => {
	const style = {
		fontSize: fontSize,
		color: color,
		fontWeight: bold ? 'bold' : 'normal',
	};

	return <h1 style={style}>{children}</h1>;
};

CMSubtitle.propTypes = {
	fontSize: PropTypes.number,
	color: PropTypes.string,
	bold: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default CMSubtitle;