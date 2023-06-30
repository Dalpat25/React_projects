import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Componets/Home';
import Login from './Componets/Login';
import Signup from './Componets/Signup';
import Account from './Componets/Account';
import ProtectedRoute from './Componets/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" >
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route 
        path='/account' element={
          <ProtectedRoute>
            <Account/>
          </ProtectedRoute>
        }/>
        </Route>
      </Routes>
    </Router>
    </AuthContextProvider>
    </>
  );
}

export default App;
