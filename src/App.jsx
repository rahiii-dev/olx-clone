import Home from './pages/Home';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import ItemsList from "./pages/ItemsList";
import ItemDetail from './pages/ItemDetail';
import SellItem from './pages/SellItem';
import { useAuth } from './context/AuthContext';

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
        <Route path='/login' element={!currentUser ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/sell' element={!currentUser ? <Navigate to='/login' state={{from : location.pathname}}/> : <SellItem/>}/>
      </Routes>
    </>
  )
}

export default App
