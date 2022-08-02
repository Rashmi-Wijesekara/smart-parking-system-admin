import React from "react";

import Navbar from "../../shared/components/Navbar";
import ParkingSlotsCount from "../components/ParkingSlotsCount";
import AdminIncharge from "../components/AdminIncharge";

const Dashboard = () => {
	return (
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">

					{/* parking slots counts display */}
					<ParkingSlotsCount />
					
					<AdminIncharge />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
