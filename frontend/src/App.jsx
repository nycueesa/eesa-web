import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"
import Main from "./page/main/Main.jsx"
import Contact from "./page/contact/Contact.jsx"
import Activities from "./page/activities/Activities.jsx"
import EesaIntro from "./page/intro/EesaIntro.jsx"
import Member from "./page/intro/Member.jsx"
import Academic from "./page/intro/Academic.jsx";
import Technical from "./page/intro/Technical.jsx";
import TechnicalActivities from "./page/intro/TechnicalActivities.jsx";
import EESAWeb from "./page/intro/TechActivities/EESAWeb.jsx";
import HighSchoolVisit from "./page/intro/TechActivities/HighSchoolVisit.jsx";
import HardwareCourse from "./page/intro/TechActivities/HardwareCourse.jsx";
import SoftwareCourse from "./page/intro/TechActivities/SoftwareCourse.jsx";
import SinglesDay from "./page/intro/TechActivities/SinglesDay.jsx";
import CourseSelection from "./page/intro/TechActivities/CourseSelection.jsx";
import EventIntro from "./page/event/EventIntro.jsx"
import NewInfo from "./page/event/NewInfo.jsx"
import Timeline from "./page/event/Timeline.jsx"
import Team from "./page/team/Team.jsx"
import PrevExam from "./page/resource/PrevExam.jsx"
import Project from "./page/resource/Project.jsx"
import Calendar from "./page/file/Calendar.jsx"
import CourseTool from "./page/file/CourseTool.jsx"

function App(){		
	return (
		<BrowserRouter>
		  	<Layout>
				<Routes>
			  		<Route path="/" element={<Main />} />

					<Route path="/intro/eesa-intro" element={<EesaIntro />} />
					<Route path="/intro/member" element={<Member />} />
					<Route path="/intro/academic" element={<Academic />} />
					<Route path="/intro/technical" element={<Technical />} />
					<Route path="/intro/technical-activities" element={<TechnicalActivities />} />
					<Route path="/intro/technical-activities/eesa-web" element={<EESAWeb />} />
					<Route path="/intro/technical-activities/high-school-visit" element={<HighSchoolVisit />} />
					<Route path="/intro/technical-activities/hardware-course" element={<HardwareCourse />} />
					<Route path="/intro/technical-activities/software-course" element={<SoftwareCourse />} />
					<Route path="/intro/technical-activities/singles-day" element={<SinglesDay />} />
					<Route path="/intro/technical-activities/course-selection" element={<CourseSelection />} />

					<Route path="/event/event-intro" element={<EventIntro />} />
					<Route path="/event/new-info" element={<NewInfo />} />
					<Route path="/event/timeline" element={<Timeline />} />

					<Route path="/team" element={<Team />} />

					<Route path="/resource/prevexam" element={<PrevExam />} />
					<Route path="/resource/project" element={<Project />} />

					<Route path="/file/calendar" element={<Calendar />} />
					<Route path="/file/course-tool" element={<CourseTool />} />

			  		<Route path="/activities" element={<Activities />} />
			  		<Route path="/contact" element={<Contact />} />
					
				</Routes>
		  	</Layout>
		</BrowserRouter>
	);
};

export default App;
