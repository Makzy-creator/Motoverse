
// const App = () => {
//   return (
//     <div>
//       <Frame />
//     </div>
//   )
// }

// export default App

// App.jsx (or your root component)
// import './App.css'; // Import global CSS file

// function App() {
//   return (
//     <div className="scrollbar-none">
//       {/* Your app content here */}
//     </div>
//   );
// }





import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar";
import Hero from "./Components/LandingPage/Hero";
import Home from "./Pages/ImportIdentity/Home";
import Buyer from "./Pages/Buyer";
import Buyer1 from "./Pages/Buyer1";
import Hero2 from "./Components/LandingPage/Hero2";
import Card from "./Components/LandingPage/Card";
import About from "./Components/LandingPage/About";
import Products from "./Components/LandingPage/Products";
import CarsPage from "./Components/LandingPage/CarsPage";
import ProgressBarSet from "./Components/LandingPage/ProgressBarSet";
import HowItWorks from "./Components/LandingPage/HowItWorks";
import Testmonials from "./Components/LandingPage/Testmonials";
import Team from "./Components/LandingPage/Team";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"
import Login from "./Components/Login";
import FrameComponent from "./Components/FrameComponent";
import FrameComponent1 from "./Components/FrameComponent1";
import Password from "./Components/Password";
import CreateIdentity from "./Pages/CreateIdentity/CreateIdentity";
import Attention from "./Pages/CreateIdentity/Attention";
import BackupPhrase from "./Pages/CreateIdentity/BackupPhrase";
import BackupPhraseNext from "./Pages/CreateIdentity/BackupPhraseNext";
import BackupPhrase3 from "./Pages/CreateIdentity/BackupPhrase3";
import CreateNewPassword from "./Pages/CreateIdentity/CreateNewPassword";
import CompleteNewPassword from "./Pages/CreateIdentity/CompleteNewPassword";
import GeneralRegInfo from "./Pages/CreateIdentity/GeneralRegInfo";
import UploadDocument from "./Pages/CreateIdentity/UploadDocument";
import SuccessPage from "./Pages/CreateIdentity/SuccessPage";
import VehicleVerifier1 from "./Pages/VehicleVerifier/VehicleVerifier1";
import Application from "./Pages/VehicleVerifier/Application";
import Credentials from "./Pages/VehicleVerifier/Credentials";


function App() {
 
  return (
    <Theme>
      <Routes>
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Hero />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/Buyer1" element={<Buyer />} />
      <Route path="/buyer" element={<Buyer1 />} />
      <Route path="/Hero2" element={<Hero2 />} />
      <Route path="/card" element={<Card />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/CarsPage" element={<CarsPage />} />
      <Route path="/ProgressBarSet" element={<ProgressBarSet />} />
      <Route path="/HowItWorks" element={<HowItWorks />} />
      <Route path="/Testimonials" element={<Testmonials/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/FrameComponent" element={<FrameComponent/>} />
      <Route path="/FrameComponent1" element={<FrameComponent1/>} />
      <Route path="/CreateIdentity" element={<CreateIdentity/>} />
      <Route path="/Attention" element={<Attention/>} />
      <Route path="/BackupPhrase" element={<BackupPhrase/>} />
      <Route path="/BackupPhraseNext" element={<BackupPhraseNext/>} />
      <Route path="/BackupPhrase3" element={<BackupPhrase3/>} />
      <Route path="/CreateNewPassword" element={<CreateNewPassword/>} />
      <Route path="/CompleteNewPassword" element={<CompleteNewPassword/>} />
      <Route path="/GeneralRegInfo" element={<GeneralRegInfo/>} />
      <Route path="/UploadDocument" element={<UploadDocument/>} />
      <Route path="/SuccessPage" element={<SuccessPage/>} />
      <Route path="/VehicleVerifier1" element={<VehicleVerifier1/>} />
      <Route path="/Application" element={<Application/>} />
      <Route path="/Credentials" element={<Credentials/>} />
   </Routes>
    </Theme>
  );
}
export default App;
