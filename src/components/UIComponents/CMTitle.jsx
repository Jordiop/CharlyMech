import PropTypes from 'prop-types';

const CMTitle = ({ fontSize = 32, color = '#FAFAFA', bold = true, children }) => {
	const style = {
		fontSize: fontSize,
		color: color,
		fontWeight: bold ? 'bold' : 'normal',
	};

	return <h1 style={style}>{children}</h1>;
};

CMTitle.propTypes = {
	fontSize: PropTypes.number,
	color: PropTypes.string,
	bold: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default CMTitle;