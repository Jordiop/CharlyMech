import { timelineEvents } from "../../models/TimelineEvent";
import style from './About.module.css';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { CMTitle, CMSubtitle, CMCard } from '/src/components/components';

const showDialog = (message) => console.log(message); // Temporary code

export default function About() {
	return (
		<>
			<section className={style.Section}>
				<VerticalTimeline lineColor="#0553b1">
					{
						(timelineEvents.reverse()).map((event, index) => {
							const EventIcon = event.type['icon'];
							return (
								<VerticalTimelineElement
									key={index}
									contentArrowStyle={{ display: 'none' }}
									contentStyle={{ background: "transparent", padding: 0, boxShadow: 'none' }}
									date={event.date}
									dateClassName={style.VerticalTimelineElementDate}
									iconStyle={{ background: "#0553b1", color: "#FAFAFA", boxShadow: 'none' }}
									icon={<EventIcon onClick={() => showDialog(event.desciption)} />}
									iconClassName={style.VerticalTimelineElementIcon}
								>
									<CMCard
										width=''
										padding='20px'
										cardOnClickMethod={() => showDialog(event.desciption)}
									>
										<CMTitle>{event.title}</CMTitle>
										<CMSubtitle fontSize={18} bold={false}><p dangerouslySetInnerHTML={{ __html: event.short }}></p></CMSubtitle>
									</CMCard>
								</VerticalTimelineElement>
							)
						})
					}
					<VerticalTimelineElement
						iconStyle={{ background: "#0553b1", color: "#FAFAFA", boxShadow: 'none' }}
						icon={<HiDotsHorizontal onClick={() => showDialog('Continously developing solutions')} />}
						iconClassName={style.VerticalTimelineElementIcon}
					/>
				</VerticalTimeline>
			</section >
		</>
	);
}