import React from 'react';

function ListCustomers(props) {

    return (
        <div>
            <h1>Customer List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers && props.customers.map(Customer => (
                        <tr key={Customer.id}>
                            <td>{Customer.first_name}</td>
                            <td>{Customer.last_name}</td>
                            <td>{Customer.address}</td>
                            <td>{Customer.phone_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListCustomers;
