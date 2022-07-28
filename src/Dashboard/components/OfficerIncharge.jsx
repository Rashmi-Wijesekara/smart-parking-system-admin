import React from 'react';

import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg";

const OfficerIncharge = () => {

	const fullname = "Mahinda Perera";
	

	return (
		<div className="font-main">
			<div className="w-40 text-lg font-bold text-textGrey text-center mx-auto ">
				Admin in-charge
			</div>
			<div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
				<div className="flex flex-col">
					<ProfilePic className="mx-auto w-[100px] -my-2" />
					<div className="font-main w-fit mx-20">
						<div className="font-bold">
							{fullname}
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default OfficerIncharge;