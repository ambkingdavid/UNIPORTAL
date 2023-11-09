import { useState } from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { customStyles } from "../../components/body/custom_table_style";


const ResultsTable = ({ columns, data }) => {
  const [records, setRecords] = useState(data);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "None") {
      setRecords(data);
    } else {
      const newData = data.filter((row) => row.level.includes(selectedValue));
      setRecords(newData);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen gap-4">
      <div className="flex flex-row items-center gap-2 px-2 pt-5 ">
        <label htmlFor="semesterSelect">Choose level:</label>
        <select
          className="rounded-lg border-none bg-gray-200 w-[200px]"
          id="semesterSelect"
          onChange={handleChange}
        >
          <option value="">
            None
          </option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
        </select>
      </div>
      <div className="flex border-4 px-5 mx-auto">
        <DataTable
          columns={columns}
          data={records}
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
        ></DataTable>
      </div>
    </div>
  );
};

ResultsTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default ResultsTable;
