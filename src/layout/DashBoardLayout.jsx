import { Outlet } from "react-router-dom"
import Sidebar from "../shared/sidebar/Sidebar"
import Nav from "../shared/Navbar/Nav"

const DashBoardLayout = () => {
  return (
    <div>
       <nav>
      <Nav/>
    </nav>
      {/* here will be navbar */}
      <div className="flex gap-[23px]">
        <Sidebar />
        <div className="w-[calc(100%-283px)]" >
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout
