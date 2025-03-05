import { Outlet } from "react-router"
import Navbar from "../ui/Navbar/Navbar"

//como no es un componente de pagina usamos el snippet rafc
export const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
