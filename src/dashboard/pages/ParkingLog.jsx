import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import SearchForm from "../../shared/components/SearchForm"
import * as sampleData from "../../sampleData";

const ParkingLog = () => {
	const parkingLogData = sampleData.parkingLogData
	const parkingLogTitles = sampleData.parkingLogTitles

	return (
		<div className="flex flex-row">
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="flex flex-row mt-4 overflow-y-auto h-5/6">
					<div className="grow px-6">
						<Table
							titles={parkingLogTitles}
							data={parkingLogData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<SearchForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParkingLog;

//If you want to see search card and table please remove 14th line