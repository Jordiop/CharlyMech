import {
	HiOutlineAcademicCap,
	HiOutlineCodeBracket,
} from 'react-icons/hi2';
import { MdWorkOutline } from "react-icons/md";


const TimelineEventType = Object.freeze({
	STUDY: { background: '#FF0000', color: '#FFD700', icon: HiOutlineAcademicCap },
	WORK: { background: '#00FF00', color: '#43A047', icon: MdWorkOutline },
	CODEVENT: { background: '#0000FF', color: '#007FFF', icon: HiOutlineCodeBracket },
})

class TimelineEvent {
	constructor(title, short, description, type, date, location = '') {
		this.title = title;
		this.short = short;
		this.desciption = description;
		this.type = type;
		this.date = date;
		this.location = location
	}
}

const timelineEvents = [
	new TimelineEvent(
		'First code encounter',
		'Learned what code is during high school. Coded in <i>TurboPascal</i> and some <i>JavaScript</i>.',
		'During my last 2 years at high school I choose the scientific and technological path so I had 2 subjects designed for engineering stuff. IT was the first one who showed me what code was and its potential to build my own tools (even though we used TurboPascal as a programming language). Then, last year in \'Industrial Technology\' (translation for <i>Tecnología Industrial</i> subject) I learned how to program LEGO robots and my class made a sumo competition (mine looped infinitely and lost, <b>NICE</b>) and at the final months the teacher showed us some basic (and old) JavaScript. I wasn\'t paying a lot of attention to be honest (sorry teacher).',
		TimelineEventType.CODEVENT,
		'2015 - 2017',
		'Ibiza',
	),
	new TimelineEvent(
		'Starting to work',
		'Getting my first working experience as a delivery man during summer periods.',
		'From 2016 to 2022 I have worked as a delivery man and driver during summer seasons in Ibiza while studying for the rest of the year. This kind of jobs helped me, even today, to understand what team-work is and its importance, how to be organized while working (and in my personal life) and how difficult is to get an income money since I was a teenager when I started my first job.',
		TimelineEventType.WORK,
		'2016',
		'Ibiza',
	),
	new TimelineEvent(
		'Physics Degree at UIB',
		'3 years studying <b>Physics Degree</b> at Univerity of Balearic Islands.',
		'Took 3 years of Physics Degree at Univerity of Balearic Islands where I learned the basics of Physics and Mathematics. Last year was the COVID-19 pandemic and everybody had to stay at home, so I came back to Ibiza with my parents and during the online classes period I finally realized that maybe Physics were not meant for me.',
		TimelineEventType.STUDY,
		'2017 - 2020',
		'Mallorca',
	),
	new TimelineEvent(
		'My first Python code',
		'Create <i>my first Python \'library\'</i> for data treatment for Lab experiements graphics and statistics.',
		'While I was studying Physics, I had a subject called <i>Computer Assisted Physics</i> where I had to create programs for data display and statistics. All these programs were meant to be used in the Lab subject so I created kind of a \'library\' with all functions needed for all experiments and calculus. I used the Anaconda Spyder IDE (I still think is a mess to understand, but very powerful for what I used it for) and libraries like numpy, matplotlib. It\'s a shame that I didn\'t know about Git to keep all the code and share it with people who could need it.',
		TimelineEventType.CODEVENT,
		'2017',
	),
	new TimelineEvent(
		'ASIR HNC',
		'Two year technician degree in <b>Operating Systems and Networking Administration at IES Sa Colomina</b>.',
		'Since Physics path wasn\'t the good one, I decided to go back home and try to study my all time hobby: computers. In this technicial degree I learned the very basics of IT in general during first year and then got deeper into server administration and services. The second year was the one that really got me into coding since I took several subjects where I had to code in different languages (mostly scripting for server automations).',
		TimelineEventType.STUDY,
		'Sep 2020 - Jun 2022',
		'Ibiza',
	),
	new TimelineEvent(
		'JavaScript, why?',
		'My very first real panic event coding with <i>JavaScript</i> during the first ASIR year.',
		'I took a subject where I studied what a markup language is and which types are (like XML with xPath and XQuery). HTML and CSS were inevitable, so JavaScript also (this is not common on this subject, was my teacher\'s idea). He proposed to make a web a of our choice but we have to request data from an API using XMLHttpRequest. At this point I didn\'t know the basics of programing so scopes, etc. I struggled so much and my teacher didn\'t help at all so I got my first burn out, I hated coding at this moment.',
		TimelineEventType.CODEVENT,
		'2020',
	),
	new TimelineEvent(
		'Well, I kind of like coding',
		'The moment we really fell in love with coding was during ASIR second year where I coded in several languages for server-side automations with <i>PHP</i>.',
		'From the first year burn out to love this world. The ASIR second year is meant to learn all about internet protocols, server administration, get deep into data base administration (MySQL mostly), etc (here you can see why I am inclined to back-end development). Bash, Batch and Powershell were what I used the most, but PHP really got me into learning programming basics and all what it comes with. I have to thank my teacher since he was the reason I forgot about first year\'s disaster.',
		TimelineEventType.CODEVENT,
		'2022',
	),
	new TimelineEvent(
		'DAM HNC',
		'Two year technician degree in <b>Cross-platform Application Development at CESUR</b>.',
		'Once I found my path I decided to get really into it and took 2 years to study it properly and not in a self-taught way (I spent the summer re-learning Python). During these two years I learned how to do code in a right way and not the way I was doing it before (scripting mainly) and also some new technologies (also old ones like Java Swing or JavaFX for GUI apps). First year\'s knowledge was general programming, computers and IT (like databases, version control, etc), the second year was the specialization in native Android app development, alongside other knowledge like programming services and data access all with Java and Kotlin.',
		TimelineEventType.STUDY,
		'Sep 2022 - Jun 2024',
		'Mallorca',
	),
	new TimelineEvent(
		'Internship at Omniaccess',
		'First work experience as a <i>FullStack and Mobile App developer</i>.',
		'The DAM internship. To be honest it was kind of scary at first but I really enjoyed this internship, the people was awesome and I was able to prove that I\'m worthy to hold the Developer\'s Hammer (I had to make that reference). Thanks to all my company mates there at Omniaccess for the time we spent! Talking about thech, during this internship I mainly learned about web technologies like Vue and NestJS (they noticed that I\'m more back-end oriented so they mostly gave me API manteinance with NestJS). For my final project, I developed with a mate an app with Flutter to display data consumptions for clients. These was 3 months full of tech growth to me.',
		TimelineEventType.WORK,
		'Mar 2024 - Jun 2024',
		'Mallorca'
	),
	new TimelineEvent(
		'Valet at Son Bunyola hotel',
		'Work as valet in Son Bunyola hotel from Virgin Hotels.',
		'LONG DESCRIPTION',
		TimelineEventType.WORK,
		'Jul 2024 - Present',
		'Mallorca'
	),
];

export { timelineEvents };