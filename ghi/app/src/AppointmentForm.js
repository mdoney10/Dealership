import React, { useState, useEffect } from 'react';

function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);
    const [automobile_vin, setVin] = useState("");
    const [customer, setCustomer] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [technician, setTechnician] = useState("");
    const [reason, setReason] = useState("");
    const [status, setStatus] = useState("");
    const [vip, setVip] = useState("");

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            automobile_vin: automobile_vin,
            customer: customer,
            appointment_date: date,
            appointment_time: time,
            technician: technician,
            reason: reason,
            status: status,
            vip: vip,
        };
        const appointmentUrl = 'http://localhost:8080/api/appointments/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            setVin('');
            setCustomer('');
            setDate('');
            setTime('');
            setTechnician('');
            setReason('');
            setStatus('');
            setVip('');
        }
    };

    const handleVinChange = async (event) => {
        const value = event.target.value;
        setVin(value);
    };

    const handleCustomerChange = async (event) => {
        const value = event.target.value;
        setCustomer(value);
    };

    const handleDateChange = async (event) => {
        const value = event.target.value;
        setDate(value);
    };

    const handleTimeChange = async (event) => {
        const value = event.target.value;
        setTime(value);
    };

    const handleTechnicianChange = async (event) => {
        const value = event.target.value;
        setTechnician(value);
    };

    const handleReasonChange = async (event) => {
        const value = event.target.value;
        setReason(value);
    };

    const handleVipChange = async (event) => {
        const value = event.target.value;
        setVip(value);
    };

    const handleStatusChange = async (event) => {
        const value = event.target.value;
        setStatus(value);
    };

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create Appointment</h1>
              <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                  <input
                    value={automobile_vin}
                    onChange={handleVinChange}
                    placeholder="Vin"
                    required
                    type="text"
                    name="automobile_vin"
                    id="automobile_vin"
                    className="form-control"
                  />
                  <label htmlFor="vin">Vin</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={customer}
                    onChange={handleCustomerChange}
                    placeholder="Customer"
                    required
                    type="text"
                    name="customer"
                    id="customer"
                    className="form-control"
                  />
                  <label htmlFor="customer">Customer Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={date}
                    onChange={handleDateChange}
                    placeholder="Date"
                    required
                    type="date"
                    name="appointment_date"
                    id="appointment_date"
                    className="form-control"
                  />
                  <label htmlFor="date">Appointment Date</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={time}
                    onChange={handleTimeChange}
                    placeholder="Time"
                    required
                    type="time"
                    name="appointment_time"
                    id="appointment_time"
                    className="form-control"
                  />
                  <label htmlFor="time">Appointment Time</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    onChange={handleTechnicianChange}
                    value={technician}
                    required
                    name="technician"
                    id="technician"
                    className="form-select"
                  >
                    <option value="">Choose a technician</option>
                    {technicians.map(technician => (
                      <option key={technician.id} value={technician.id}>
                        {technician.last_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={reason}
                    onChange={handleReasonChange}
                    placeholder="Reason"
                    required
                    type="description"
                    name="reason"
                    id="reason"
                    className="form-control"
                  />
                  <label htmlFor="reason">Reason</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={status}
                    onChange={handleStatusChange}
                    placeholder="Status"
                    required
                    type="text"
                    name="status"
                    id="status"
                    className="form-control"
                  />
                  <label htmlFor="vip">Status</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={vip}
                    onChange={handleVipChange}
                    placeholder="VIP"
                    required
                    type="text"
                    name="vip"
                    id="vip"
                    className="form-control"
                  />
                  <label htmlFor="vip">VIP</label>
                </div>
                <button className="btn btn-primary">Create Appointment</button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default AppointmentForm;