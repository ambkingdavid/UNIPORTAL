import Sidebar, { SideBarItem } from "../../components/body/Side";
import CoursesTable from "../../components/body/courses_table";
import {
  HelpCircle,
  Sheet,
  BarChart3,
  LayoutDashboard,
  Settings,
  Library,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-row text-center">
      <Sidebar>
        {/* <SideBarItem icon={<LayoutDashboard size={20}/>}text="Dashboard"/> */}
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          href="/Dashboard"
        />
        <SideBarItem icon={<BarChart3 size={20} />} text="Results" />
        <SideBarItem icon={<Library size={20} />} text="Resources" />
        <SideBarItem icon={<Sheet size={20} />} text="Transcript" />
        <hr className="my-3" />
        {/* <SideBarItem icon={<Settings size={20} />} text="Profile" /> */}
        <SideBarItem
          icon={<Settings size={20} />}
          text="Profile"
          href="/Profile"
        />
        <SideBarItem icon={<HelpCircle size={20} />} text="FAQ" />
      </Sidebar>
      <CoursesTable />
    </div>
  );
};

export default Dashboard;
