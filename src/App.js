import './App.css';
import About from './pages/About';
import CRUD from './pages/CRUD';
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Sidenav from './Sidenav';
import {Routes , Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/settings' element={<Settings/>}></Route>
              <Route path='/products' element={<Products/>}></Route>
            </Routes>
          </BrowserRouter>
        </>
    </div>
  );
}

export default App;
