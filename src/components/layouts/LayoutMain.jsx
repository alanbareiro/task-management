import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";

//como no es un componente de pagina usamos el snippet rafc
export const LayoutMain = () => {
  console.log("Layout");
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      {/* <Outlet /> */}
    </>
  )
}
