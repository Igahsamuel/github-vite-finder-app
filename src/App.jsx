// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/layouts/Navbar'
import Footer from './Components/layouts/Footer'
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Notfound from './pages/Notfound';
import { GithubProvider } from './context/Github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './Components/layouts/Alert';
// import dotenv from 'dotenv'
// dotenv.config()



function App() {
  // const [count, setCount] = useState(0)

  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
    <div className='flex  flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12'>
        <Alert/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/about" element={<About/>}/>
          <Route path = "/user/:login" element = {<User/>}/>
          <Route path= "/notfound" element={<Notfound/>}/>
          <Route path= "/*" element={<Notfound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
    </AlertProvider>
     </GithubProvider>
  )
}

export default App
