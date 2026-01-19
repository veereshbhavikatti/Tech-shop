import react from 'react'
// import Login from './LoginForm/Login'
// import Signup from './LoginForm/Signup'
import Routing from './Routes/Routing'
// import './App.css'
import Navbar from './Header/Navbar'
// import Sliders from './Header/Sliders'
// import Sliders2 from './Header/Sliders2'
import Advantages from './Header/Advantages'
import Footer from './Header/Footer'


function App() {
 
  return (
    <>
      <Navbar />
      <Routing />
      <Advantages/>
      <Footer/>
      {/* <Login />/ */}
      {/* <Signup/> */}

    </>
  )
}

export default App
