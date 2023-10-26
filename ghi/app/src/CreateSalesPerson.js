import React, { useState } from 'react';

function CreateSalesPerson() {
    let alertClasses = "alert alert-success d-none";
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeID, SetEmployeeID] = useState('');

    const [submitted, setSubmit] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }
    const handleEmployeeIDChange = (event) => {
        const value = event.target.value;
        SetEmployeeID(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeID;

        const salesPersonUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };


        const response = await fetch(salesPersonUrl, fetchConfig);
        if (response.ok) {
            const newSalesPerson = await response.json();
            console.log(newSalesPerson)

            setFirstName('');
            setLastName('');
            SetEmployeeID('');

        }
            setSubmit('submitted!')
    }
    if (submitted.length > 0) {
        alertClasses = "alert alert-success mt-4";

    }
    return (
        <>
            <div className={alertClasses} role="alert">
                Salespeople successfully submitted!
            </div>
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a Sales Person</h1>
                        <form onSubmit={handleSubmit} id="create-conference-form">
                            <div className="form-floating mb-3">
                                <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required type="text" id="first_name" className="form-control" name="first_name" />
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required type="text" id="last_name" name="last_name" className="form-control" />
                                    <label htmlFor="last_name">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={employeeID} onChange={handleEmployeeIDChange} placeholder="Employee ID" required type="text" id="employee_id" name="employee_id" className="form-control" />
                                <label htmlFor="employee_id">Employee ID</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>

    )

}

export default CreateSalesPerson;
