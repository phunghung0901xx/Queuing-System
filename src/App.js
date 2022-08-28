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
      </Routes>

    </div>
    </Router>
  );
}

export default App;
