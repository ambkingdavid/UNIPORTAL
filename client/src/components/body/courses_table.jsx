import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { customStyles } from "../../components/body/custom_table_style";
import { UserData } from "../../components/body/userData";

const CoursesTable = ({ column, input }) => {
  const { fullName, level, semester, department } = UserData();

  return (
    <div className="flex flex-col h-screen w-screen gap-4">
      <div>
        <p>Name: {fullName}</p>
        <p>Department: {department}</p>
        <p>Level: {level}</p>
        <p>Semester: {semester}</p>
      </div>

      <div>
        <div className="flex flex-col border-4 w-3/4">
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
