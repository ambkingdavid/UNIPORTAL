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
import Announcement from "../../components/body/Announcement";

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
				{/* <SideBarItem icon={<Library size={20} />} text="Resources" />
				<SideBarItem icon={<Sheet size={20} />} text="Transcript" /> */}
				<hr className="my-3" />
				<SideBarItem
					icon={<Settings size={20} />}
					text="Profile"
					href="/Profile"
				/>

				<SideBarItem icon={<HelpCircle size={20} />} text="FAQ" />
			</Sidebar>
			<CoursesTable column={columns} input={data} />


      {/* Announcements section */}
			<div className="border-gray-300 border-l-2 p-4 md:flex flex-col gap-1 mb-4 max-w-[400px]">
				<div className="bg-greyish rounded-[2rem] p-4 my-4">
					<h1 className="text-2xl font-bold py-2 border-b-2 ">
						Announcements
					</h1>

          {/* Announcement component */}
					<Announcement
						title={"Holidays in 3 days"}
						content="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat a soluta. Dignissimos, a excepturi hic molestias vero fuga tenetur ex voluptatibus aliquam eos, vitae mollitia? Libero, odit. Ab, dolore assumenda maiores itaque vitae perspiciatis id incidunt expedita eaque, odio amet eligendi, provident deleniti voluptates? Minus beatae laborum nihil optio."
					/>
					<Announcement
						title={"The school has burned down"}
						content="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat a soluta. Dignissimos, a excepturi hic molestias vero fuga tenetur ex voluptatibus aliquam eos, vitae mollitia? Libero, odit. Ab, dolore assumenda maiores itaque vitae perspiciatis id incidunt expedita eaque, odio amet eligendi, provident deleniti voluptates? Minus beatae laborum nihil optio."
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
