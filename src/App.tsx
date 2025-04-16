import './App.css'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import SiteRoutes from './SiteRoutes'

function App() {

  return (
    
    <div className='w-screen h-screen  '>
      <Navbar />
      <SiteRoutes/>
      <Footer/>
    </div>
  )
}

export default App
