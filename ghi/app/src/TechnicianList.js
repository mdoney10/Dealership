import { useEffect, useState } from 'react'


function TechniciansList() {
    const [technicians, setTechnicians] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/technicians/');
            if (response.ok) {
                const data = await response.json();
                console.log('Technicians Data:', data);
                setTechnicians(data.technicians);
            } else {
                console.error('Error Fetching Technicians:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };
    useEffect(() => {
        getData();
    }, [])
    const handleDelete = async (id) => {
        const url = `http://localhost:8080/api/technicians/${id}`

        const fetchConfigs = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const resp = await fetch(url, fetchConfigs)
        const data = await resp.json()

        setTechnicians(technicians.filter((technician) => (technician.id) !== id));
    }
    return (
        <div>
          <h2>Technicians</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map(technician => (
                <tr key={technician.id}>
                  <td>{technician.employee_id}</td>
                  <td>{technician.first_name}</td>
                  <td>{technician.last_name}</td>
                  <td>
                    <button onClick={() => handleDelete(technician.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
export default TechniciansList;
