import RegisteredCourses from "../../components/body/RegisteredCourses";
import Sidebar, { SideBarItem } from "../../components/body/Side";
import {
  HelpCircle,
  Sheet,
  BarChart3,
  LayoutDashboard,
  Settings,
  Library,
  BookOpen,
  BookOpenCheck,
} from "lucide-react";
import { columns, data } from "../../components/body/result_data";

const RegCourse = () => {
  return (
    <div className="flex flex-row text-center w-full">
     <Sidebar>
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          href="/Dashboard"
        />
        <SideBarItem
          icon={<BookOpen size={20} />}
          text="Courses Registration"
          href="/courseReg"
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
      <RegisteredCourses column={columns} input={data}/>
    </div>
  );
};

export default RegCourse;
