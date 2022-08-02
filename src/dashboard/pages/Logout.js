import React from "react";

import Navbar from "../../shared/components/Navbar";

const Logout = () => {
	return (
		<div className="flex flex-row">
			<Navbar path="/logout" />
			<div className="bg-background flex-grow pl-[270px] h-screen"></div>
		</div>
	);
};

export default Logout;
