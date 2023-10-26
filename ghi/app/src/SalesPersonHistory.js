import React, { useState, useEffect } from 'react'

function SalespersonHistory() {
    const [saleData, setSaleData] = useState([]);
    const [salesPeopleData, setSalespeopleData] = useState([]);
    const [selectedSalesperson, setSelectedSalesPerson] = useState('');

    async function fetchData() {
        const salesFetch = await fetch('http://localhost:8090/api/sales/')
        const salesPeopleFetch = await fetch('http://localhost:8090/api/salespeople/');
        if (salesFetch.ok && salesPeopleFetch.ok) {
            const salesData = await salesFetch.json();
            const salesPeopleData = await salesPeopleFetch.json();
            setSaleData(salesData.sales);
            setSalespeopleData(salesPeopleData.salespeople);
        } else {
            console.error("Error Fetching Data")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1 className='text-center'>SalesPerson History</h1>
            <select value={selectedSalesperson} onChange={(event) => setSelectedSalesPerson(event.target.value)}>
                <option value="">Select A SalesPerson</option>
                {salesPeopleData.map(salesperson => (
                    <option key={salesperson.employee_id} value={salesperson.employee_id}>
                        {salesperson.first_name} {salesperson.last_name}
                    </option>
                ))}
            </select>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Sales Person</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {saleData
                        .filter((sale) => sale.salesperson_employee_id === selectedSalesperson)
                        .map((sale) => (
                            <tr key={sale.id}>
                                <td>
                                    {sale.sales_person_first_name} {sale.salesperson_last_name}
                                </td>
                                <td>
                                    {sale.customer_first_name} {sale.customer_last_name}
                                </td>
                                <td>{sale.vin}</td>
                                <td>${sale.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SalespersonHistory;
