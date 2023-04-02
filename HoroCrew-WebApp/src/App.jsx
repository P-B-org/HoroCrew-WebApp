import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Misc/Navbar/Navbar";
import { Login } from "./views/Login/Login";
import { Home } from "./views/HomePage/Home";



function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}>
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>

      </div>
    </div>
  )
}

export default App
