import React from 'react';
import './App.css';
import Header from '../src/components/header';
import SideBar from './components/sideBar';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import DashBoard from '../src/pages/Dashboard';
import Coupen from './pages/Coupen';
import Customer from './pages/Customer';
import Package from './pages/Package';
import Poll from './pages/Poll';
import User from './pages/User';
import Setting from './pages/Setting';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <SideBar>
      <Routes>
         <Route path="/" element={<DashBoard />} />
         <Route path="/dashboard" element={<DashBoard />} />
         <Route path="/Coupen" element={<Coupen />} />
         <Route path="/Customer" element={<Customer />} />
         <Route path="/Package" element={<Package />} />
         <Route path="/Poll" element={<Poll />} />
         <Route path="/User" element={<User />} />
         <Route path="/setting" element={<Setting />} />
      </Routes>
      </SideBar>
    </BrowserRouter>

  );
}

export default App;
