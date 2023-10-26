import React, { useState, useEffect } from 'react'


export default function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([])
    async function fetchManufacturers() {
        const response = await fetch('http://localhost:8100/api/manufacturers/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setManufacturers(data.manufacturers)
        }
    }
    useEffect(() => {
        fetchManufacturers()
    }, [])

    return (
        <>
            <h1 style={{ marginTop: '10px' }}>Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                                <td> {manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
