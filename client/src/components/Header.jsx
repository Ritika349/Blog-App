import { Navbar, TextInput } from "flowbite-react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <Navbar className="border-b-2">
    <Link to ="/" className="self-center text-sm whitespace-nowrap sm:text-lg dark:text-white">
   <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">ritika</span>
   Blog
    </Link>
    <form>
        <TextInput placeholder="" />

        
    </form>
    </Navbar>
  )
}

export default Header