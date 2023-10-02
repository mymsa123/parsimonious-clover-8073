import './App.css';
import Home from './Components/Home';
import { Navbar } from './Components/Navbar';
import Book from './Pages/Book';
import DoctorsList from './Pages/DoctorsList';
import { Products } from './Pages/Products';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     {/* <Home/> */}
     <DoctorsList/>
  {/* <Book/> */}
     {/* <Products/> */}
    </div>
  );
}

export default App;
