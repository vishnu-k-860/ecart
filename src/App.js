import { Route, Routes } from 'react-router';
import './App.css';
import Home from './component/Home';
import Cart from './component/Cart';
import Footer from './component/Footer';
import Wishlist from './component/Wishlist';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={ <Cart/> }/>
        <Route path='/Wishlist' element={ <Wishlist/> }/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
