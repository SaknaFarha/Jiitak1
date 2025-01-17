import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoPage from './pages/LogoPage';
import PasswordSetting from './pages/PasswordSetting';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoPage/>}/>
        <Route path="/password-setting" element={<PasswordSetting/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
