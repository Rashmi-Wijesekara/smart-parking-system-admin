import React from "react";

import Navbar from "../../shared/components/Navbar";
import OfficerIncharge from "../components/OfficerIncharge";
import ParkingSlotsCount from "../components/ParkingSlotsCount";
import Data from "../components/Data"

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Dashboard = () => {
		
	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
				<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">		
				</div>
				<div className="flex flex-row mt-4">
				<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">
				    <Data />
					<ParkingSlotsCount />
                </div>
				
					
					<div className="flex-col items-center justify-items-center mx-2">
						<OfficerIncharge />
					</div>
				</div>
				
			</div>			
		</div>
		</Router>
	);
};

export default Dashboard;