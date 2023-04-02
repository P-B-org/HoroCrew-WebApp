import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="login" element={<Login />}>

          </Route>
        </Routes>

      </div>
    </div>
  )
}

export default App
