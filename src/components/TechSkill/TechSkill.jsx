import PropTypes from 'prop-types';
import style from './TechSkill.module.css';
import { ExpertiseLevel, CMTitle, CMSubtitle } from '../components';

function TechSkill({ techSkill }) {
	const { icon: IconComponent, name, expertise, description, color, } = techSkill;
	return (
		<div className={style.TechSkillContainer}>
			<div className={style.SkillTitle}>
				<IconComponent style={{
					color: color, fontSize: '18px', marginRight: '10px'
				}} />
				<CMTitle
					fontSize={16}
				>{name}</CMTitle>
			</div>
			<div className={style.SkillDescription}><CMSubtitle fontSize={14}>{description}</CMSubtitle></div>
			<div className={style.SkillExpertise}>
				<CMSubtitle fontSize={14} bold={false} color='#FAFAFA'>Expertise level:</CMSubtitle>
				<ExpertiseLevel expertiseLevel={expertise} color={color} />
			</div>
		</div>
	);
}

TechSkill.propTypes = {
	techSkill: PropTypes.shape({
		icon: PropTypes.elementType.isRequired,
		name: PropTypes.string.isRequired,
		expertise: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}).isRequired,
}

export default TechSkill