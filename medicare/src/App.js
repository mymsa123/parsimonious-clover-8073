



import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';


// import Navbar from './Components/Navbar';



function App() {
 
  return (
    <div className="App">
   {/* <Contact/> */}
   <Navbar/> 
       <AllRoutes/>
    
       {/* <Home/> 
      <Category/>
    
     <Carousal/>
     <Choose/>   */}
   

      {/* <Login/>  */}
 
      {/* <Details/>  */}
      
    </div>
  );
}

export default App;
