import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import NavBar from "./Component/NavBar/NavBar";

 function App() {
  return (
    <div>
       <NavBar/>
    <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>



    </Routes>
    </div>
  )
}
export default App;
