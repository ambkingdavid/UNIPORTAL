import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './pages/1.home/Home'
import About from './pages/5.about/About'
import Contact from './pages/6.contact/Contact'
import Events from './pages/4.dashboard/Dashboard'
import Foot from './components/footer/Foot'
import Login from './pages/2.0 student_login/Login'
import Profile from './pages/7.profile/Profile'
import { selectUser } from './slices/userSlice'
import { useSelector } from 'react-redux'
import Dashboard from './pages/4.dashboard/Dashboard'
import SignUp from './pages/9.signup/Signup'
import Staff_Login from './pages/2.2 staff_login/Staff_Login'
import Parent_Login from './pages/2.1 parent_login/Parent_Login'
import LecturerDash from './pages/4.1 lecturer_dashboard/lecturer_dash'
import ResultDash from './pages/4.2 result_dash/result_dash'

function App() {
  const user = useSelector(selectUser);

  return (
    <div className= 'w-screen h-screen bg-white'>
      <Router>
      {location.pathname !== "/Dashboard" ? <Navbar /> : null}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Parent' element={<Parent_Login/>} />
          <Route path='/Staff' element={<Staff_Login/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={user ? <Events/> : <Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/result' element={<ResultDash/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/lecturerDash' element={<LecturerDash/>} />
        </Routes>
        {location.pathname !== "/Dashboard" ? <Foot /> : null}
        </Router>
    </div>
  )
}

export default App
