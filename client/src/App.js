import {Routes, Route} from "react-router-dom"
import './App.css';
// import Homepage from "./pages/homepage"
import Login from "./pages/loginpage"
import Register from "./pages/registerpage"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App;
