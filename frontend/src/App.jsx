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
			  <Route path="/activities" element={<Activities />} />
			  <Route path="/contact" element={<Contact />} />
			</Routes>
		  </Layout>
		</BrowserRouter>
	);
};

export default App;
