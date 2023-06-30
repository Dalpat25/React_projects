import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Componets/Navbar";
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Account from './pages/Account';
import ProtectedRoute from './Componets/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
