import { useEffect, useState } from 'react'


function AppointmentList() {
    const [appointments, setAppointments] = useState([])


    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/appointments/');
            if (response.ok) {
                const data = await response.json();
                setAppointments(data.appointments);
                console.log('Appointments data:', data.appointments);
            } else {
                console.error('Error fetching appointments:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const handleFinished = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/`

        const fetchConfigs = {
            method: 'put',
            body: JSON.stringify({completed: true}),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const resp = await fetch(url, fetchConfigs)
        const data = await resp.json()
        console.log(data)
            setAppointments(appointments.filter((appointment) => (appointment.id) !== id));
    }




    const handleCancel= async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/`

        const fetchConfigs = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const resp = await fetch(url, fetchConfigs)
        const data = await resp.json()
        console.log(data)

        setAppointments(appointments.filter((appointment) => (appointment.id) !== id));
    }
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Customer</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>VIP</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.automobile_vin}</td>
                <td>{appointment.customer}</td>
                <td>{appointment.appointment_date}</td>
                <td>{appointment.appointment_time}</td>
                <td>{appointment.technician.last_name}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.vip}</td>
                <td><button onClick={() => handleCancel(appointment.id)} className="btn btn-danger">Delete</button></td>
                <td><button onClick={() => handleFinished(appointment.id)} className="btn btn-success">Finish</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

export default AppointmentList;

