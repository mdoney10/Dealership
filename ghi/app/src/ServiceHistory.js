import { useEffect, useState } from 'react'

function ServiceList() {
    const [appointments, setAppointments] = useState([])
    const [filterValue, setFilterValue] = useState([])
    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }
    useEffect(() => {
        getData();
    }, [])

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value)
    }
    const getFilteredVins = () => {
        return getFilteredVins.filter(v => v.appointment.automobile_vin().includes(filterValue.id()))
    }

    return (
        <div>
          <input name='Search' onClick={handleFilterChange} placeholder='Search' />
          <button type="submit">Search</button>
          <h1>Service History</h1>
          <table className="table table-">
            <thead>
              <tr>
                <th>Vin</th>
                <th>VIP</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.filter(v => v.automobile_vin.includes(filterValue)).map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.automobile_vin}</td>
                  <td>{appointment.vip}</td>
                  <td>{appointment.customer}</td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_time}</td>
                  <td>{appointment.technician.first_name}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
export default ServiceList;
