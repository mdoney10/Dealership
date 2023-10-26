import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPerson from './CreateSalesPerson';
import ListSalesPeople from './ListSalesPeople';
import AddCustomer from './AddCustomer';
import ListCustomers from './ListCustomers';
import SaleForm from './NewSale';
import ListSales from './SalesList';
import SalespersonHistory from './SalesPersonHistory';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import TechniciansList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ServiceList from './ServiceHistory';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import ModelList from './ModelList';
import ModelForm from './ModelForm';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="create" element={<CreateSalesPerson />} />
          <Route path="salespeople" element={<ListSalesPeople salespeople={props.salespeople} />}></Route>
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="customerlist" element={<ListCustomers customers={props.customers} />}></Route>
          <Route path="salesform" element={<SaleForm />} />
          <Route path="saleslist" element={<ListSales sales={props.sales} />}></Route>
          <Route path="salespersonhistory" element={<SalespersonHistory />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechniciansList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
            <Route path="service" element={<ServiceList />}/>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
