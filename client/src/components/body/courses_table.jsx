import DataTable from "react-data-table-component";
import CourseRegistration from "./course_registration";
import PropTypes from "prop-types";
import { customStyles } from "../../components/body/custom_table_style";

const CoursesTable = ({ column, input }) => {
  return (
    <div className="flex flex-col h-screen w-screen gap-4">
      <div className="h-1/3 overflow-auto">
        <CourseRegistration />
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
