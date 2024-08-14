import { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants/Index";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className="w-full ">
      <div className="lg:hidden fixed w-full p-2  bg-[#121212] opacity-95 z-50">
        <div className="lg:hidden flex  justify-between items-center ">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" className="h-12 w-10" />
            <p className="text-white">VR World</p>
          </div>
          <button className="p-2" onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X className="text-white" /> : <Menu className="text-white size-7" />}
          </button>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col text-white justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Create an account
              </a>
            </div>
          </div>
        )}
        <hr className="h-px mt-3 bg-[#232323] border-0 " />
      </div>
      <div className=" hidden lg:block fixed w-full  bg-[#121212] opacity-95 z-50">
        <div className=" text-white p-2  grid grid-cols-3 items-center">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" className="h-12 w-10" />
            <p>VR World</p>
          </div>
          <div className="flex gap-8 justify-center">
            <p>Features </p>
            <p>Workflow</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
          <div className="justify-end flex lg:gap-2 xl:gap-6 ">
            <button className="SignIn">Sign In</button>
            <button className="Create">Create an account</button>
          </div>
        </div>
        <hr className="h-px mt-3 bg-[#232323] border-0 " />
      </div>
    </div>
  );
};

export default Navbar;
