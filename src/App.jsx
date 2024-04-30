
// const App = () => {
//   return (
//     <div>
//       <Frame />
//     </div>
//   )
// }

// export default App

// import { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Buyer from "./Pages/Buyer";
import Buyer1 from "./Pages/Buyer1";
import Frame from "./Components/Login";
import Navbar from "./Components/LandingPage/Navbar";
import Hero from "./Components/LandingPage/Hero";
import HeroBg from "./Components/LandingPage/HeroBg";
import Hero2 from "./Components/LandingPage/Hero2";
import Page3 from "./Components/LandingPage/Page3";
import Card from "./Components/LandingPage/Card";
import About from "./Components/LandingPage/About";
import Products from "./Components/LandingPage/Products";
import CarsPage from "./Components/LandingPage/CarsPage";
import ProgressBarSet from "./Components/LandingPage/ProgressBarSet";
import HowItWorks from "./Components/LandingPage/HowItWorks";
import Testmonials from "./Components/LandingPage/Testmonials";
import Team from "./Components/LandingPage/Team";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/src/Components/Login.jsx" element={<Frame />} />
      <Route path="/buyer1" element={<Buyer />} />
      <Route path="/buyer" element={<Buyer1 />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Hero" element={<Hero />} />
      <Route path="/HeroBg" element={<HeroBg />} />
      <Route path="/Hero2" element={<Hero2 />} />
      <Route path="/Page3" element={<Page3 />} />
      <Route path="/card" element={<Card />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/CarsPage" element={<CarsPage />} />
      <Route path="/ProgressBarSet" element={<ProgressBarSet />} />
      <Route path="/HowItWorks" element={<HowItWorks />} />
      <Route path="/Testimonials" element={<Testmonials/>} />
      <Route path="/Team" element={<Team/>} />
   </Routes>
  );
}
export default App;
