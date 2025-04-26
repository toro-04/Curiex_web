import './App.css'
import HomePage from './components/homePage'
import NavBar from './components/navBar'
import EventsPage from './components/Eventspage'

function App() {
  return (
    <>
    <div className="noOverFlowH black" >
      <NavBar/>
      <HomePage/>
      <EventsPage/>
    </div>
    </>
  )
}

export default App
