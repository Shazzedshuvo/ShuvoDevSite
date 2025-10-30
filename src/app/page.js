
import About from "./Component2/About";
import ContactPage from "./Component2/ContactPage";
import Contact from "./Component2/ContactPage";
import Experiance from "./Component2/Experiance";
import Fottar from "./Component2/Fottar";
import Home1 from "./Component2/Home1";
import Projacts from "./Component2/Projacts";
import Skils from "./Component2/Skils";
import Teastmonial from "./Component2/Teastmonial";
// import Bagground from "./Componnt/Bagground";
import CustomCoursor from "./Componnt/CustomCoursor";
import Navbar from "./Componnt/Navbar";

export default function Home() {
  return (
   <div>
    <div className="relative gradient text-white">
      {/* <Bagground></Bagground> */}
      <CustomCoursor></CustomCoursor>
      
     <Navbar></Navbar>
     <Home1></Home1>
     <About></About>
     <Skils></Skils>
     <Projacts></Projacts>
     <Experiance></Experiance>
  <Teastmonial/>
<ContactPage></ContactPage>
  <Fottar></Fottar>
    </div>
   </div>
  );
}
