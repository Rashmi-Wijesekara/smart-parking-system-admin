import React from 'react';

const Data = () => {
	return (
		<div className="font-main mt-5 w-fit mx-auto">
			
			<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
				<div className="flex flex-row">
					<div className="py-2 px-4">
						<div className="text-navbarTextGrey font-semibold">
							Employees
						</div>
						<div className="font-bold text-3xl">345</div>
					</div>
				</div>
			</div>

			<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
				<div className="flex flex-row">
					<div className="py-2 px-4 grow">
						<div className="text-navbarTextGrey font-semibold">
							Security Officers
						</div>
						<div className="font-bold text-3xl">12</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Data;
