import React from "react";

import Navbar from "../../shared/components/Navbar";

const ParkingLog = () => {
	return (
		<div className="flex flex-row">
			<Navbar path="/parking-log" />
			<div className="bg-background flex-grow pl-[270px] h-screen"></div>
		</div>
	);
};

export default ParkingLog;
