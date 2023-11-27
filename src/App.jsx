import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"
import JobSuccess from "./JobSuccess"
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="jobSuccess" element={ <JobSuccess/> } />

        
      </Routes>
    </div>
  )
}

export default App