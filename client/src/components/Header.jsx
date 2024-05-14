import { Navbar, TextInput } from "flowbite-react";
import {Link} from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "flowbite-react";
const Header = () => {
  return (
  
    <Navbar className="border-b-2 ">
    <Link to ="/" className="self-center  whitespace-nowrap sm:text-lg dark:text-white text-2xl">
   <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ritika</span>
     Blog
    </Link>
    <form>
       <TextInput placeholder="Search..." rightIcon={AiOutlineSearch} />
    </form>
   <div className="space-x-8">
    <Link to ="/">Home</Link>
    <Link to ="/about">About</Link>   
    <Link to ="/projects">Projects</Link>
    </div>
    
  <Link to ="/signin"><Button outline gradientDuoTone="purpleToBlue">
        SignIn
      </Button></Link>
    </Navbar>
  
  )
}

export default Header