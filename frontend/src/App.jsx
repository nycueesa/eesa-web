import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"
import Main from "./page/main/Main.jsx"
import Contact from "./page/contact/Contact.jsx"
import Activities from "./page/activities/Activities.jsx"

function App(){		
	return (
		<BrowserRouter>
		  	<Layout>
				<Routes>
			  		<Route path="/" element={<Main />} />

					<Route path="/intro/eesa-intro" element={<Eesa-intro />} />
					<Route path="/intro/menber" element={<Eesa-intro />} />

					<Route path="/event/new-info" element={<Eesa-intro />} />
					<Route path="/event/timeline" element={<Eesa-intro />} />

					<Route path="/team" element={<Eesa-intro />} />

					<Route path="/resource/prevexam" element={<Eesa-intro />} />
					<Route path="/resource/project" element={<Eesa-intro />} />

					<Route path="/rerource/project" element={<Eesa-intro />} />
					<Route path="/rerource/project" element={<Eesa-intro />} />

					<Route path="/file/calendar" element={<Eesa-intro />} />
					<Route path="/file/course-tool" element={<Eesa-intro />} />

			  		<Route path="/activities" element={<Activities />} />
			  		<Route path="/contact" element={<Contact />} />
					
				</Routes>
		  	</Layout>
		</BrowserRouter>
	);
};

export default App;
