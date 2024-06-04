import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ItemsList from "./pages/ItemsList";
import ItemDetail from './pages/ItemDetail';
import SellItem from './pages/SellItem';

function App() {
   let isLogged = true;
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<ItemsList/>}/>
          <Route path="/item/:itemId" element={<ItemDetail/>}/>
        </Route>
        <Route path='/login' element={isLogged ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/sell' element={<SellItem/>}/>
      </Routes>
    </>
  )
}

export default App
