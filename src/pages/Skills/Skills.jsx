import { CMTitle, CMSubtitle, TechSkill } from '../../components/components.js';
import style from './Skills.module.css';
import { languages, frameworks, others } from '../../models/TechSkill.js'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IoIosArrowDown } from "react-icons/io";

const StyledAccordionMUI = styled(Accordion)(() => ({
	backgroundColor: 'transparent',
	borderBottom: '1px solid #525252',
	borderRadius: 'none',
	boxShadow: 'none',
	marginBottom: '1em',
	'&:before': {
		display: 'none',
	},
	'&.Mui-expanded': {
		marginBottom: '1em',
	},
}));

const StyledAccordionSummaryMUI = styled(AccordionSummary)(() => ({
	borderRadius: 'none',
	boxShadow: 'none',
	'.MuiAccordionSummary-expandIconWrapper': {
		color: '#FAFAFA',
		fontSize: '20px'
	},
}));

const StyledAccordionDetailsMUI = styled(AccordionDetails)(() => ({
	padding: '0 2em 2em 2em',
	boxShadow: 'none',
}));

export default function Skills() {
	return (
		<>
			<section className={style.TeckSkillsSection}>
				<CMTitle
					fontSize={46}
				>Technical Skills</CMTitle>
				<CMSubtitle
					bold={false}
					fontSize={18}
				>
					Mainly focused on <b className={style.TechSkillsDescriptionFocus}>mobile app development</b>, being able to create native or cross-platform applications, with self-taught expertise in back-end and services development.
				</CMSubtitle>
				{/* Languages */}
				<div className={style.Accordion}>
					<StyledAccordionMUI>
						<StyledAccordionSummaryMUI id="panel-header1" aria-controls="panel-content" expandIcon={<IoIosArrowDown />}>
							<CMTitle fontSize={20}>Languages</CMTitle>
						</StyledAccordionSummaryMUI>
						<StyledAccordionDetailsMUI>
							<div className={style.AccordionDetails}>
								{languages.map((skill, index) => (
									<TechSkill techSkill={skill} key={index} />
								))}
							</div>
						</StyledAccordionDetailsMUI>
					</StyledAccordionMUI>
					{/* Frameworks */}
					<StyledAccordionMUI>
						<StyledAccordionSummaryMUI id="panel-header2" aria-controls="panel-content" expandIcon={<IoIosArrowDown />}>
							<CMTitle fontSize={20}>Frameworks and libraries</CMTitle>
						</StyledAccordionSummaryMUI>
						<StyledAccordionDetailsMUI>
							<div className={style.AccordionDetails}>
								{frameworks.map((skill, index) => (
									<TechSkill techSkill={skill} key={index} />
								))}
							</div>
						</StyledAccordionDetailsMUI>
					</StyledAccordionMUI>
					{/* Other */}
					<StyledAccordionMUI>
						<StyledAccordionSummaryMUI id="panel-header3" aria-controls="panel-content" expandIcon={<IoIosArrowDown />}>
							<CMTitle fontSize={20}>Other</CMTitle>
						</StyledAccordionSummaryMUI>
						<StyledAccordionDetailsMUI>
							<div className={style.AccordionDetails}>
								{others.map((skill, index) => (
									<TechSkill techSkill={skill} key={index} />
								))}
							</div>
						</StyledAccordionDetailsMUI>
					</StyledAccordionMUI>
				</div>
			</section>
		</>
	);
}