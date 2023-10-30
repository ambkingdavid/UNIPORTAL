import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"


const protectedRoutes = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        axios.get('http://localhost:1245/status')
          .then((response) => {
            setIsLoggedIn(response.data.user ? true : false);
          })
          .catch((error) => {
            console.error('Error checking user:', error);
          });
      }, []);

    switch (isLoggedIn) {
        case true:
            return children;
        case false:
            return <Navigate to="/login" />
    }
}

export default protectedRoutes