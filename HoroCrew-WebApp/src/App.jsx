import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/misc/Login/Login";
import { Home } from "./views/misc/Home/Home";
import { Navbar } from "./components/Misc/Navbar/Navbar";
import FormSignUp from "./views/misc/Signup/Signup";
import SocialFeed from "./views/Feeds/SocialFeed";
import AstroFeed from "./views/Feeds/AstrologicalFeed";
import ProtectedRoute from "./components/Misc/ProtectedRoute/ProtectedRoute"
import { Profile } from "./views/Profile/Profile";


function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/socialfeed" element={
            <ProtectedRoute>
              <SocialFeed />
            </ProtectedRoute>
          } />
          <Route path="/astrofeed" element={
            <ProtectedRoute>
              <AstroFeed />
            </ProtectedRoute>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
