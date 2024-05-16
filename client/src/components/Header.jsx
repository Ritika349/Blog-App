import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import {Link,useLocation} from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "flowbite-react";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path=useLocation().pathname;
  return (
  
    <Navbar className="border-b-2 ">
    <Link to ="/" className="self-center  whitespace-nowrap sm:text-lg dark:text-white text-2xl">
   <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ritika</span>
     Blog
    </Link>
    <form>
       <TextInput placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline" />
    </form>
    <Button className="lg:hidden h-10 w-12" color="gray" pill ><AiOutlineSearch/></Button>
  

    <div className="flex gap-2 md:order-2">
      <Button color="gray " className="h-10 w-12" pill><FaMoon/></Button>
  <Link to ="/signin"><Button outline gradientDuoTone="purpleToBlue">
        SignIn
      </Button></Link>
      </div>
      <NavbarToggle/>
      <NavbarCollapse>
      <NavbarLink active={path=="/"} as={"div"}>
      <Link to ="/">Home</Link>
      </NavbarLink>
      <NavbarLink active={path=="/about"} as={"div"}>
      <Link to ="/about">About</Link>   
      </NavbarLink>
      <NavbarLink active={path=="/projects"} as={"div"}>
      <Link to ="/projects">Projects</Link>
      </NavbarLink>
    </NavbarCollapse>
    </Navbar>
  
  )
}

export default Header