import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Athletes from "./pages/Athletes"
import Competitions from "./pages/Competitions"
import Blogs from "./pages/Blogs"
import Header from "./components/Header"
import Services from "./pages/Services"
import Sponsers from "./components/Sponsers"
import './App.css'
import About from "./pages/About"
function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Sponsers />
    </BrowserRouter>  
  )
}

export default App
