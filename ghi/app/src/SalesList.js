import React from 'react';

function ListSales(props) {
    
    return (
        <div>
            <h1>Sales List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>SalesPerson Employee ID</th>
                        <th>SalesPerson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sales && props.sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.salesperson_employee_id}</td>
                            <td>{sale.sales_person_first_name} {sale.salesperson_last_name}</td>
                            <td>{sale.customer_first_name} {sale.customer_last_name}</td>
                            <td>{sale.vin}</td>
                            <td>${sale.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSales;
