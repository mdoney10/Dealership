import React, { useState, useEffect } from 'react'


export default function ManufacturerForm() {
    const [manufacturer, setManufacturer] = useState('')

    function handleManufacturerChange(e) {
        setManufacturer(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {}
        data.name = manufacturer
        const createManufacturerUrl = "http://localhost:8100/api/manufacturers/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(createManufacturerUrl, fetchConfig)
        if (response.ok) {
            const newManufacturer = await response.json()
            setManufacturer('')
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input value={manufacturer} onChange={handleManufacturerChange} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
