import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";
import PrivateRoute from "./page/PrivateRoute.jsx";
import Register from "./page/Register.jsx";

function App() {
  // Menentukan status autentikasi pengguna
  const isAuth = localStorage.getItem("tokens") ? true : false;

  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* Rute untuk halaman login */}
          <Route path='/login' element={<Login />} />

          {/* Rute untuk halaman register */}
          <Route path='/register' element={<Register />} />

          {/* Rute untuk halaman beranda, dengan PrivateRoute */}
          <Route
            path='/'
            element={
              <PrivateRoute auth={isAuth}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/home" auth={isAuth} element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
