import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ItemsList from "./pages/ItemsList";
import ItemDetail from './pages/ItemDetail';
import SellItem from './pages/SellItem';
import { useAuth } from './components/AuthContextProvider';

function App() {
   const {currentUser} = useAuth();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<ItemsList/>}/>
          <Route path="/item/:itemId" element={<ItemDetail/>}/>
        </Route>
        <Route path='/login' element={!currentUser ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/sell' element={!currentUser ? <Navigate to='/login'/> : <SellItem/>}/>
      </Routes>
    </>
  )
}

export default App
