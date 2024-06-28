
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar";
import Hero from "./Components/LandingPage/Hero";
import Home from "./Pages/ImportIdentity/Home";
import Hero2 from "./Components/LandingPage/Hero2";
import About from "./Components/LandingPage/About";
import Products from "./Components/LandingPage/Products";
// import CarsPage from "./Components/LandingPage/CarsPage";
import HowItWorks from "./Components/LandingPage/HowItWorks";
import Testmonials from "./Components/LandingPage/Testmonials";
import Team from "./Components/LandingPage/Team";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"
import Login from "./Components/Login";
import InputField from "./Components/InputField";
import FrameComponent1 from "./Components/FrameComponent1";
import Password from "./Components/Password";
import Welcome from "./Pages/CreateIdentity/Welcome";
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
import Credentials1 from "./Pages/VehicleVerifier/Credentials1";
import Experience from "./Pages/VehicleVerifier/Experience";
import Reference from "./Pages/VehicleVerifier/Reference";
import Success from "./Pages/VehicleVerifier/Success";
import Dashboard from "./Pages/Dashboard/Dashboard";
import HeroOne from "./Pages/Dashboard/HeroOne";
// import Mintpage from "./Components/LandingPage/Mint";
import Humberger from "./Components/LandingPage/Humberger";
import DashNav from "./Pages/Dashboard/DashNav";
import DashUnlocked from "./Pages/Dashboard/DashUnlocked";
import DashProgress from "./Pages/Dashboard/DashProgress";


function App() {
 
  return (
    <Theme>
      <Routes>
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Hero />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/Hero2" element={<Hero2 />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      {/* <Route path="/CarsPage" element={<CarsPage />} /> */}
      <Route path="/HowItWorks" element={<HowItWorks />} />
      <Route path="/Testimonials" element={<Testmonials/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/InputField" element={<InputField/>} />
      <Route path="/FrameComponent1" element={<FrameComponent1/>} />
      <Route path="/Welcome" element={<Welcome/>} />
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
      <Route path="/Credentials1" element={<Credentials1/>} />
      <Route path="/Experience" element={<Experience/>} />
      <Route path="/Reference" element={<Reference/>} />
      <Route path="/Success" element={<Success/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/DashProgress" element={<DashProgress/>} />
      <Route path="/DashUnlocked" element={<DashUnlocked/>} />
      <Route path="/DashNav" element={<DashNav/>} />
      <Route path="/HeroOne" element={<HeroOne/>} />
      {/* <Route path="/Mint" element={<Mintpage/>} /> */}
      <Route path="/Humberger" element={<Humberger/>} />
   </Routes>
    </Theme>
  );
}
export default App;
