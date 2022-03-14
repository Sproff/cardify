import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const ConfigureRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/profile/:shortName" element={<Profile />} />
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default ConfigureRoutes;
