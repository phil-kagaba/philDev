import { path } from 'framer-motion/client'
import './App.css'
import Others from './components/OthersUsersFromJson'
import LandingPage from './components/landing'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'

function App() {

  return(
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<LandingPage />}  />
      <Route path="/allUser" element={<Others />} />
    </Routes>
   </BrowserRouter>
   </>
  )

}

export default App


// <Navbar />
//<Home name='phil the baddest' age='46' />
