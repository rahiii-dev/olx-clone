import Home from './pages/Home';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import ItemsList from "./pages/ItemsList";
import ItemDetail from './pages/ItemDetail';
import SellItem from './pages/SellItem';
import { useAuth } from './context/AuthContext';
import Auth from './pages/Auth';
import Register from './pages/Register';

function App() {
   const {currentUser} = useAuth();
   const location = useLocation();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<ItemsList/>}/>
          <Route path="/item/:itemId" element={<ItemDetail/>}/>
        </Route>
        <Route path='/auth' element={currentUser ? <Navigate to='/' /> : <Auth />}>
          <Route index element={<Navigate to='login' />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/sell' element={!currentUser ? <Navigate to='/auth/login' state={{from : location.pathname}}/> : <SellItem/>}/>
      </Routes>
    </>
  )
}

export default App
