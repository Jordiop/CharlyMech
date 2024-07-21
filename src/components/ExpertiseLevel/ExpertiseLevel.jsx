import PropTypes from 'prop-types';
import style from './ExpertiseLevel.module.css';

function ExpertiseLevel({ expertiseLevel, color = '#FAFAFA' }) {
	expertiseLevel = expertiseLevel > 5 ? 5 : expertiseLevel;

	const dots = [];
	for (let i = 0; i < 5; i++) {
		dots.push(
			<span
				key={i}
				className={style.ExpertiseDot}
				style={{
					backgroundColor: i < expertiseLevel ? color : '#989898',
				}}
			/>
		);
	}

	return <div>{dots}</div>;
}

ExpertiseLevel.propTypes = {
	expertiseLevel: PropTypes.number.isRequired,
	color: PropTypes.string
};

export default ExpertiseLevel;