
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footerr = () => {
  return (
  //   <footer className="py-4">
  //       <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ritika</span>
  //  Blog
  //   </footer>
  <Footer container className="border border-sky-600 border-t-8 rounded-md px-36 text-sm whitespace-nowrap sm:text-lg font-semibold">
  <div className="w-full ">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div className="py-4 text-2xl">
         <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ritika</span>
    Blog
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <Footer.Title title="about" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Flowbite</Footer.Link>
            <Footer.Link href="#">Tailwind CSS</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Github</Footer.Link>
            <Footer.Link href="#">Discord</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright href="#" by="Ritika Blog" year={2024} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="#" icon={BsTwitter} />
        <Footer.Icon href="#" icon={BsGithub} />
        <Footer.Icon href="#" icon={BsDribbble} />
      </div>
    </div>
  </div>
</Footer>
  )
}

export default Footerr