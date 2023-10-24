import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import TechniciansList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ServiceList from './ServiceHistory';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechniciansList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="service" element={<ServiceList />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
