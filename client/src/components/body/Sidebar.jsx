import { useState } from 'react';
import Logout from './Logout';

const Sidebar = () => {
  // Define the initial student data using useState
  const [studentData, setStudentData] = useState({
    name: 'John Doe',
    department: 'Computer Science',
    level: '200 level',
    cgpa: '3.75',
  });

  return (
    <div className="h-screen w-72">
      {/* Top Section */}
      <div className="h-1/3 bg-gray-400 flex flex-col items-center justify-center rounded-b-lg">
        <img
          src="./src/assets/uniportal.jpg" // Replace with the URL of the profile picture
          alt="Profile Picture"
          className="h-20 w-20 rounded-full mb-2"
        />
        <div className="text-lg font-semibold text-white">{studentData.name}</div>
        <div className="text-sm text-gray-300">
          {studentData.department}, {studentData.level}
        </div>
        <div className="text-sm text-gray-300">CGPA: {studentData.cgpa}</div>
      </div>

      {/* Bottom Section with Navigation Links and Dropdown Menu */}
      <div className="h-2/3 bg-gray-100 rounded-b-lg border
       border-gray-300 p-4">
        {/* Navigation Links */}
        <div className="mb-4">
          <a href="#">Time Table</a>
        </div>
        <div className="mb-4">
          <a href="#">Results</a>
        </div>
        <div className="mb-4">
          <a href="#">Lecturers</a>
        </div>
        <div className="mb-4">
          <a href="#">Departmental Events</a>
        </div>
        <div className="mb-4">
          <a href="#">Transcript</a>
        </div>
        <div className="mb-4">
          <a href="#">Payments</a>
        </div>
        <div>
            <Logout/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
