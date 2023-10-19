
import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";
import uniportal from "../../assets/uniportal.jpg"
import Logout from "../../components/body/Logout"
import PropTypes from "prop-types";

const SidebarContext = createContext();
export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={uniportal}
            className={`overflow-hidden transition-all ${
                expanded? "w-12" : "w-0"
            }`}
            alt=""
          />
          <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded?<ChevronFirst /> : <ChevronLast/>}
          </button>
        </div>

        <SidebarContext.Provider value={{expanded}}>
        <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            className="w-10 h-19 rounded-md"
            alt=""
          />

          <div className={`flex flex-row justify-around overflow-hidden transition-all ${
                expanded? "w-52 ml-3" : "w-0"
            }`}>
            <div className="leading-4">
              <h4 className="font-semibold">Benjamin</h4>
              <span className="text-xs t text-gray-600">benjamin@mail.com</span>
            </div>
            <div className="mt-1.5"> <Logout/> </div>
          </div>

          
        </div>
      </nav>
    </aside>
  );
}

export function SideBarItem({ icon, text, active, }) {
    const {expanded} = useContext(SidebarContext)

//     // Check if the `text` prop is an object with `content` and `href`
//   const isLink = typeof text === 'object' && text.hasOwnProperty('content') && text.hasOwnProperty('href');
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-gray-200 text-gray-800"
            : "hover:bg-gray-200 text-gray-600"
        }
        `}
    >
      {icon}
      {/*Render a link if `text` is an object with `content` and `href` */}
      {/* {isLink ? (
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}> <a href={text.href}>
          {text.content}
        </a>
        </span>
      ) : (
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      )} */}
      <span className={`overflow-hidden transition-all ${
        expanded? "w-52 ml-3" : "w-0"
      }`}>{text}</span>
      {/* {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2" }`} />
      )} */}

      {!expanded && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
      >{text}</div>}
    </li>
  );
}

SideBarItem.propTypes = {
    text: <PropTypes className="string"/>,
    active: <PropTypes className="bool"/>,
    icon: <PropTypes className="symbol"/>,
    // href: <PropTypes className="string"/>
}

Sidebar.propTypes = {
    children: <PropTypes className="any"/>
}