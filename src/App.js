import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Category from './pages/category/Category';
import ProductDetail from './pages/productDetail/ProductDetail';
import Login from './pages/logIn/Login';
import SingUp from './pages/signUp/SingUp';
import RecoveryPassword from './pages/recoveryPassword/RecoveryPassword';
import ConfirmPassword from './pages/confirmPassword/ConfirmPassword';
import LogInDone from './pages/logInDone/LogInDone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category' element={<Category />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/RecoveryPassword' element={<RecoveryPassword />} />
        <Route path='/confirmPassword' element={<ConfirmPassword />} />
        <Route path='/loginDone' element={<LogInDone />} />
      </Routes>
    </Router>
  );
}

export default App;
