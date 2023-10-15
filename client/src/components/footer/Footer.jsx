import { Link } from "react-router-dom"
import { navigation } from "../header/navbar"

const Footer = () => {
    return (
      <div className="bottom-0 bg-black w-full text-white px-4">
        <div className= "flex flex-col justify-center items-center">
            {/* <Link></Link> */}
            {navigation.map((item, index) => {
                return (
                    <Link key={index} to={item.path} className="text-white hover:text-gray-400 px-4 py-2">
                        {item.name}
                    </Link>
                )
            } 
            )}
    
        </div>
      </div>
    )
  }
  
  export default Footer