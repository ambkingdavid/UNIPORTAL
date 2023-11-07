import axios from "axios";
import { useEffect, useState } from "react";

export const useStatus = () => {
  const [responseData, setResponseData] = useState(null);
  const url = "http://localhost:1245/student/me";

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return responseData;
};
