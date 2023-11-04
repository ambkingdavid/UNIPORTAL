import axios from "axios";
import { useEffect, useState } from "react";

const [responseData, setResponseData] = useState(null);


useEffect(() => {
  axios.get('https://localhost:1245/status')
    .then((response) => {
      // Set the response data in the state variable
      setResponseData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

export const Status = () => {
  return responseData;
};