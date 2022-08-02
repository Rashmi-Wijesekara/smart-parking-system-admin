import React from "react";

import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg";

const AdminIncharge = () => {
	return (
		<div className="font-main m-20 mt-8">
			<div className="w-40 text-lg font-bold text-textGrey text-center mx-auto ">
				System Admin in-charge
			</div>
			<div className="bg-white shadow-lg rounded-xl mx-2 py-5 px-4">
				<div className="flex flex-col">
					<ProfilePic className="mx-auto w-[100px] -my-2" />
					<div className="font-main w-fit mx-2 px-6">
						<div className="font-bold">Mahinda Perera</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminIncharge