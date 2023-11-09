import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { customStyles } from "../../components/body/custom_table_style";
import { UserData } from "../../components/body/userData";

const CoursesTable = ({ column, input }) => {
  const { fullName, level, semester, department } = UserData();

  return (
    <div className="flex flex-col h-screen w-full gap-4">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <div className="flex items-start flex-col p-5 text-lg gap-1">
        <p>Name: <span className="font-semibold capitalize">{fullName}</span></p>
        <p>Department: <span className="font-semibold capitalize">{department}</span></p>
        <p>Level: <span className="font-semibold capitalize">{level}</span></p>
        <p>Semester: <span className="font-semibold capitalize">{semester}</span></p>
      </div>

      <div>
        <div className="flex flex-col border-4 w-3/4 m-auto">
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
  );
};

CoursesTable.propTypes = {
  column: PropTypes.array.isRequired,
  input: PropTypes.array.isRequired,
};

export default CoursesTable;
