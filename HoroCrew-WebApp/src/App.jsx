import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/misc/Login/Login";
import { Home } from "./views/misc/Home/Home";
import { Navbar } from "./components/Misc/Navbar/Navbar";
import FormSignUp from "./views/misc/Signup/Signup";
import SocialFeed from "./views/Feeds/SocialFeed";
import AstroFeed from "./views/Feeds/AstrologicalFeed";
import ProtectedRoute from "./components/Misc/ProtectedRoute/ProtectedRoute"
import { Profile } from "./views/Profile/Profile";
import { AppBack } from "./components/BackgroundSigns/Background";
import { FormBg } from "./components/BackgroudForms/BackgroundForm";
import { Post } from "./views/Comments/Comments";
import { NewPost } from "./views/Post/Post";
import ProtectedRoute from "./components/Misc/ProtectedRoute/ProtectedRoute";
import { Profile } from "./views/Users/Profile/Profile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />


        <Route path="/profile" element={
          <ProtectedRoute>
            <Navbar />
            <Profile />
            <NewPost />
          </ProtectedRoute>
        } />
        <Route path="/socialfeed" element={
          <ProtectedRoute>
            <Navbar />
            <SocialFeed />
            <Post />

          </ProtectedRoute>
        } />
        <Route path="/astrofeed" element={
          <ProtectedRoute>
            <Navbar />
            <AstroFeed />
            <AppBack />
          </ProtectedRoute>
        } />
        <Route path='*' element={<Navigate to='/' />} />

        <Route
          path="/socialfeed"
          element={
            <ProtectedRoute>
              <Navbar />
              <SocialFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/astrofeed"
          element={
            <ProtectedRoute>
              <Navbar />
              <AstroFeed />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
