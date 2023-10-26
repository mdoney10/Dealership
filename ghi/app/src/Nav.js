import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="create">Add a Sales Person</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="salespeople">Sales People List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="addcustomer">Add a Customer</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="customerlist">Customer List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="salesform">Add a sale</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="saleslist">Sales List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="salespersonhistory">SalesPerson History</NavLink></li>



          < li className="nav-item">
              <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
            </li>
            < li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new">Create Technician</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/new"> Create Appointment</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to='/service'>Appointment History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Create an Automobile</NavLink>
            </li>
            <li className="nav=item">
              <NavLink className="nav-link" to="/models">Models</NavLink>
            </li>
            <li className="nav=item">
              <NavLink className="nav-link" to="/models/new">Create a Model</NavLink>
            </li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="manufacturers">Manufacturers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="/manufacturers/create">Create a Manufacturer</NavLink></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
