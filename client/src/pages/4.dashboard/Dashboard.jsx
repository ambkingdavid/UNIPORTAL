import Sidebar, { SideBarItem } from "../../components/body/Side";
import CoursesTable from "../../components/body/courses_table";
import {
  HelpCircle,
  Sheet,
  BarChart3,
  LayoutDashboard,
  Settings,
  Library,
  BookOpenCheck,
  BookOpen,
} from "lucide-react";
import { columns, data } from "../../components/body/table_data";

const Dashboard = () => {
  return (
    <div className="flex flex-row text-center">
      <Sidebar>
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          href="/Dashboard"
        />
        <SideBarItem
          icon={<BookOpen size={20} />}
          text="Courses Registration"
          href="/regCourses"
        />
        <SideBarItem
          icon={<BookOpenCheck size={20} />}
          text="Registered Courses"
          href="/regCourses"
        />

        <SideBarItem
          icon={<BarChart3 size={20} />}
          text="Check Results"
          href="/result"
        />
        <SideBarItem icon={<Library size={20} />} text="Resources" />
        <SideBarItem icon={<Sheet size={20} />} text="Transcript" />
        <hr className="my-3" />
        <SideBarItem
          icon={<Settings size={20} />}
          text="Profile"
          href="/Profile"
        />

        <SideBarItem icon={<HelpCircle size={20} />} text="FAQ" />
      </Sidebar>
      <CoursesTable column={columns} input={data} />
    </div>
  );
};

export default Dashboard;
