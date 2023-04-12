import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/misc/Login/Login";
// { FacialIO } from "./views/Facial/Facial";
import { Home } from "./views/misc/Home/Home";
import { Navbar } from "./components/Misc/Navbar/Navbar";
import FormSignUp from "./views/misc/Signup/Signup";
import SocialFeed from "./views/Feeds/SocialFeed";
import AstroFeed from "./views/Feeds/AstrologicalFeed";
import ProtectedRoute from "./components/Misc/ProtectedRoute/ProtectedRoute"
import { Profile } from "./views/Profile/Profile";
import { AppBack } from "./components/Background/Background";





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/loginFacial" element={<FacialIO />} />*/}

        <Route path="/signup" element={<FormSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Navbar />
            <AppBack />
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/socialfeed" element={
          <ProtectedRoute>
            <Navbar />
            <SocialFeed />
          </ProtectedRoute>
        } />
        <Route path="/astrofeed" element={
          <ProtectedRoute>
            <Navbar />
            <AstroFeed />
          </ProtectedRoute>
        } />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>


    </div>
  )
}

export default App
