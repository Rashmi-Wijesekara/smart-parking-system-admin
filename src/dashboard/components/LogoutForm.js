import React, { useState } from "react";

import Form from "../../shared/components/Form";
import auth from "../../shared/Auth";

const LogoutForm = (props) => {
	const [error, setError] = useState("");
	const propsError = props.error;

	if (propsError) {
		setError(propsError);
	}

	const InputNames = [
		{ id: 1, name: "Admin ID", type: "text" },
		{ id: 2, name: "Password", type: "password" },
	];
	const { id, pswd } = auth.getLoginData();

	// check for id and password
	const formSubmitHandler = (input1, input2) => {
		if (input1 === id && input2 === pswd) {
			console.log("successfully logged-out");
			setError("");
			props.logoutHandler(input1, input2);
		} else {
			console.log("wrong id & password");
			setError("Invalid ID & Password");
		}
	};

	// submit the form back to the parent component
	const formSubmit = () => {
		props.logoutHandler()
	};

	const cancel = () => {
		props.logoutHandler("cancel")
	};

	return (
		<div
			className="bg-white max-w-md mx-auto mt-20 font-second rounded-xl h-fit shadow-lg py-5 
		 transform duration-300 hover:scale-105"
		>
			<div className="px-5 py-3">
				<div className="text-center font-main text-lg text-textGrey font-semibold w-[270px] mx-auto my-4">
					Are you sure you want to log out from the Admin
					System?
				</div>

				<div className="flex justify-center gap-12">
					<div
						className="bg-mainBlue text-center px-10 py-2 mt-5 text-white rounded-lg font-semibold 
				cursor-pointer shadow-lg active:shadow-2xl active:translate-y-2 transform duration-300"
						onClick={cancel}
					>
						Cancel
					</div>

					<div
						className="bg-red-400 text-center py-2 px-10 mt-5 text-white rounded-lg font-semibold 
				cursor-pointer shadow-lg active:shadow-2xl active:translate-y-2 transform duration-300"
						onClick={formSubmit}
					>
						Log out
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoutForm;
