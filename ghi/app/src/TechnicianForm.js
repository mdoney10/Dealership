import React, {useState, useEffect} from 'react';


function TechnicianForm () {
  const [technicians, setTechnicians] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [employee_id, setEmployeeId] = useState("");

  const fetchData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  }

  useEffect(()=> {
    fetchData();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.first_name = first_name;
    data.last_name = last_name;
    data.employee_id = employee_id;

    const technicianUrl = 'http://localhost:8080/api/technicians/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(technicianUrl, fetchConfig);

    if (response.ok) {
      setFirstName('');
      setLastName('');
      setEmployeeId('');
    }
  }

  const handleFirstNameChange = async (event) => {
    const value = event.target.value;
    setFirstName(value);
  }

  const handleLastNameChange = async (event) => {
    const value = event.target.value;
    setLastName(value);
  }

  const handleEmployeeIdChange = async (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input value={first_name} onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="First Name" id="First Name" className="form-control" />
              <label htmlFor="First Name">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={last_name} onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="Last Name" id="Last Name" className="form-control" />
              <label htmlFor="Last Name">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={employee_id} onChange={handleEmployeeIdChange} placeholder="Employee ID" required type="text" name="Employee ID" id="Employee ID" className="form-control" />
              <label htmlFor="Employee Id">Employee ID</label>
            </div>
            <button className="btn btn-primary">Create Technician</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default TechnicianForm;
