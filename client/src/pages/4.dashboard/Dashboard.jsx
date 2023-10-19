
import Sidebar, { SideBarItem } from "../../components/body/Side"
import { HelpCircle, Sheet, BarChart3, LayoutDashboard, Settings, Library } from "lucide-react"

const Dashboard = () => {
    return (
      <div className="flex flex-row text-center">
     <Sidebar>
      <SideBarItem icon={<LayoutDashboard size={20}/>}text="Dashboard"/>
     {/* <SideBarItem icon={<LayoutDashboard size={20}/>}
     text={{ content: "Dashboard", href: "/Dashboard" }}/> */}
      <SideBarItem icon={<BarChart3 size={20}/>}text="Results"/>
      <SideBarItem icon={<Library size={20}/>}text="Resources"/>
      <SideBarItem icon={<Sheet size={20}/>}text="Transcript"/>
      <hr className="my-3"/>
      <SideBarItem icon={<Settings size={20}/>}text="Profile"/>
      <SideBarItem icon={<HelpCircle size={20}/>}text="FAQ"/>
     </Sidebar>
      </div>
    )
  }
  
  export default Dashboard