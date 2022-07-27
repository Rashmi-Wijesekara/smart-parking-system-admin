import React from "react";

import Table from "../../shared/components/Table";

import EmployeeSearchForm from "../../shared/components/EmployeeSearchForm";

import * as sampleData from "../../sampleData";

const EmployeeData = () => {
	const employeeTitles = sampleData.employeeTitles
	const employeeData = sampleData.employeeData

    return (
		<div className="flex flex-row">
            <div className="flex flex-row mt-4">
					<div className="grow px-6">
						<Table
							titles={employeeTitles}
							data={employeeData}
						/>
					</div>
                    <div className="flex-col items-center justify-items-center mx-10">
						<EmployeeSearchForm />
					</div>
            </div>
        </div>
        );
    };
    
export default EmployeeData;