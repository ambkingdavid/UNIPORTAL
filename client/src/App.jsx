import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './pages/1.home/Home'
import About from './pages/5.about/About'
import Contact from './pages/6.contact/Contact'
import Events from './pages/4.events/Events'
import Foot from './components/footer/Foot'
import Login from './pages/2.login/Login'
import Signup from './pages/7.signup/Signup'
import { selectUser } from './slices/userSlice'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(selectUser);

  return (
    <div className= 'w-screen h-screen bg-white'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={user ? <Events/> : <Login/>} />
          <Route path='/SignUp' element={<Signup/>} />
          <Route path='/Events' element={<Events/>} />
        </Routes>
        <Foot />
        </Router>
    </div>
  )
}

export default App
