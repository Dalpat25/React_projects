import logo from './logo.svg';
import './App.css';
// import SignUp from './Page/SignUp/SignUp'
// import HomePage from './Page/HomePage/HomePage';
// import LoginPage  from './Page/LoginPage/LoginPage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Page/SignUp/SignUp';
import LoginPage from './Page/LoginPage/LoginPage';
import HomePage from './Page/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/homepage' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
