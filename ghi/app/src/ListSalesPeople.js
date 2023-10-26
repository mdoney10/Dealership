import React from 'react';

function ListSalesPeople(props) {

    return (
        <div>
            <h1>Sales People</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.salespeople && props.salespeople.map(salesPerson => (
                        <tr key={salesPerson.id}>
                            <td>{salesPerson.first_name}</td>
                            <td>{salesPerson.last_name}</td>
                            <td>{salesPerson.employee_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSalesPeople;
