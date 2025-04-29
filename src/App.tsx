import './App.css'
import About from './components/about'
import HomePage from './components/homePage'
import NavBar from './components/navBar'

import EventsPage from './components/Eventspage'
import ContactPage from './components/contactus'

function App() {
  return (
    <>
    <div className="noOverFlowH black" >
      <NavBar/>
      <HomePage/>
      <About/>
      <EventsPage/>
      <ContactPage/>
    </div>
    </>
  )
}

export default App
