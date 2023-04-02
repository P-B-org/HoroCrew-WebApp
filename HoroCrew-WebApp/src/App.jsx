import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/misc/Login";
import { Home } from "./views/misc/Home";
import { Navbar } from "./components/Misc/Navbar/Navbar";
import FormSignUp from "./views/misc/Signup";



function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
