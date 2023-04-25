import React from 'react'
import Nav from './components/navbar/Nav'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Emergency from './pages/Emergency/Emergency'
import Services from './pages/Services/Services'
import Login from './pages/login/Login '
import Home from './pages/Home/Home'



const App = () => {
  const authenticated= true
  return (<div>
    {authenticated?<Home/> :<Login/>}
   
  </div>)
//    <BrowserRouter>
//    <Routes>
//     <Route path='/' element={<Home />} />
//     <Route path='/about' element={<About />} />
//     <Route path='/contact' element={<Contact/>} />
//     <Route path='/services' element={<Services />} />
//     <Route path='/emergency' element={<Emergency />} />
//    </Routes>
//    </BrowserRouter>
  
}

export default App
// import React from 'react'
// import Login from './pages/login/Login '

// const App = () => {
//   return (
//     <div>
//       <Login/>
//     </div>
//   )
// }


