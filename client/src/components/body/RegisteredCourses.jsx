import DataTable from "react-data-table-component";
import { UserData } from "./userData";
import { customStyles } from "../../components/body/custom_table_style";


const RegisteredCourses = ({ column, input}) => {
	const { fullName, level, semester, department } = UserData();
	return (
		<div className="w-full">
			<h1 className="text-2xl font-bold p-4">Registered Courses</h1>
			<div className="flex flex-col h-screen w-full gap-4">
				<div>
					<p>Name: {fullName}</p>
					<p>Department: {department}</p>
					<p>Level: {level}</p>
					<p>Semester: {semester}</p>
				</div>

				<div>
					<div className="flex m-auto flex-col border-4 w-3/4">
						<DataTable
							columns={column}
							data={input}
							customStyles={customStyles}
							highlightOnHover
							pointerOnHover
						></DataTable>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisteredCourses;
