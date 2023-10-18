
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotPageFound from './components/NotPageFound';
import {NavLink} from 'react-router-dom'
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
          <NavLink to="/" >Home</NavLink>
          </li>
          
          <li>
          <NavLink to="/support" >Support</NavLink>
          </li>
          
          <li>
          <NavLink to="/about" >About</NavLink>
          </li>
          
          <li>
          <NavLink to="/labs" >Labs</NavLink>
          </li>
          
          <li>
          <NavLink to="/*" >Not Found</NavLink>
          </li>

        </ul>
      </nav>




      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
        {/* Default Route */}
          <Route index element={<Home></Home>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotPageFound></NotPageFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
