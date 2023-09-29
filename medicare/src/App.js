import './App.css';
import Home from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Products } from './Pages/Products';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Home/> */}
     <Products/>
    </div>
  );
}

export default App;
