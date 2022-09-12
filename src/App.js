import Login from './pages/login/login'
import { useState} from 'react'
import Password from './pages/forgetPassword/forgetPassword';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SetPassword from './pages/SetPassword/SetPassword'
import Navbar from './pages/PageNameLogin/navbar/Navbar'
import PageNameLogin from './pages/PageNameLogin/PageNameLogin';
import DashboardPage from './pages/PageNameLogin/DashboardPage/dashboardPage';
import DevicePage from './pages/PageNameLogin/devicePage/devicePage'
import AddDevicePage from './pages/PageNameLogin/devicePage/AddDevicePage/AddDevicePage'
import DetailPage from './pages/PageNameLogin/devicePage/DetailPage/DetailPage'
import UpdatePage from './pages/PageNameLogin/devicePage/UpdatePage/UpdatePage';
import ServicePage from './pages/PageNameLogin/ServicePage/ServicePage'
import AddPage from './pages/PageNameLogin/ServicePage/AddPage/AddPage';
import DetailServicePage from './pages/PageNameLogin/ServicePage/DetailServicePage/DetailServicePage'
import LogicPage from './pages/PageNameLogin/ServicePage/LogicPage/LogicPage'
import NumberPage from './pages/PageNameLogin/NumberPage/NumberPage'
import ProgressionPage from './pages/PageNameLogin/NumberPage/ProgressionPage/ProgressionPage'
import NotifyPage from './pages/PageNameLogin/NotifyPage/NotifyPage'
import Conduct from './pages/PageNameLogin/Conduct/Conduct'
import ManageLoggin from './pages/PageNameLogin/ManageLoggin/ManageLoggin'
function App() {
  const [toggle,setToggle] = useState(false)
  
  return (
   
    <Router >
    <div className="App">
           {toggle ? <Navbar  /> :  <></>}
      <Routes>
       <Route path="/SetPassword" element={<SetPassword setToggle={setToggle} />} />
       <Route path="/Email" element={<Password  />} />
       <Route path="/" element={<Login />} />
       <Route path="/Navbar" element={<Navbar/>} />
       <Route path="/PageNameLogin" element={<PageNameLogin/>} />
       <Route path="/Dash" element={ <DashboardPage />} />
       <Route path="/Device" element={ <DevicePage />} />
       <Route path="/Device/ADD" element={ <AddDevicePage />} />
       <Route path="/Device/Detail" element={ <DetailPage />} />
       <Route path="/Device/Update" element={ <UpdatePage />} />
       <Route path="/Service" element={ <ServicePage />} />
       <Route path="/Service/AddPage" element={ <AddPage />} />
       <Route path="/Service/DetailPage" element={ <DetailServicePage />} />
       <Route path="/Service/UpdateService" element={ < LogicPage/>} />
       <Route path="/Number" element={ < NumberPage/>} />
       <Route path="/Number/progression" element={ < ProgressionPage/>} />
       <Route path="/Notify" element={ < NotifyPage/>} />
       <Route path="/Conduct" element={ < Conduct/>} />
       <Route path="/ManageLoggin" element={ < ManageLoggin/>} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
