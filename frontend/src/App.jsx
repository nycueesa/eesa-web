import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"
import Main from "./page/main/Main.jsx"
import Contact from "./page/contact/Contact.jsx"
import Activities from "./page/activities/Activities.jsx"

import EEcamp from "./page/activities/EEcampNew.jsx"

import EesaIntro from "./page/intro/EesaIntro.jsx"
import Department from "./page/intro/Department.jsx";
import DepartmentActivities from "./page/intro/DepartmentActivities.jsx";
import DepartmentSkills from "./page/intro/DepartmentSkills.jsx";
import Activity from "./page/intro/Activity.jsx";
import EventIntro from "./page/event/EventIntro.jsx"
import NewInfo from "./page/event/NewInfo.jsx"
import Timeline from "./page/event/Timeline.jsx"
import Team from "./page/team/Team.jsx"
import PrevExam from "./page/resource/PrevExam.jsx"
import Project from "./page/resource/Project.jsx"
import Calendar from "./page/file/Calendar.jsx"
import CourseTool from "./page/file/CourseTool.jsx"
import SooCamp from './page/activities/SooCamp.jsx';
import SiloCamp from './page/activities/SiloCamp.jsx';
import LightDance from './page/activities/LightDance.jsx';
import EEweek from './page/activities/EEweek.jsx';
import Drama from './page/activities/Drama.jsx';
import EEweek_1 from './page/activities/EEweek_1.jsx';
import EEweek_2 from './page/activities/EEweek_2.jsx';

function App(){		
	return (
		<BrowserRouter>
		  	<Layout>
				<Routes>
			  		<Route path="/" element={<Main />} />

					<Route path="/intro/eesa-intro" element={<EesaIntro />} />
					<Route path="/intro/:slug" element={<Department />} />
					<Route path="/intro/:slug/activities" element={<DepartmentActivities />} />
					<Route path="/intro/:slug/skills" element={<DepartmentSkills />} />
					<Route path="/intro/:slug/activities/:activitySlug" element={<Activity />} />

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
					<Route path="/activities/eecamp" element={<EEcamp />} />
					
					<Route path="/activities/soocamp" element={<SooCamp />} />
					<Route path="/activities/silocamp" element={<SiloCamp />} />
					<Route path="/activities/lightdance" element={<LightDance />} />
					<Route path="/activities/eeweek" element={<EEweek />} />
					<Route path="/activities/drama" element={<Drama />} />
					<Route path="/activities/eeweek-1" element={<EEweek_1 />} />
					<Route path="/activities/eeweek-2" element={<EEweek_2 />} />
				</Routes>
		  	</Layout>
		</BrowserRouter>
	);
};

export default App;
