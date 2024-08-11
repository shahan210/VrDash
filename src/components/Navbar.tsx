import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="p-2 fixed w-full bg-[#121212] opacity-90 ">
      <div className=" text-white  grid grid-cols-3">
        <div className="flex gap-4 items-center">
          <img src={Logo} alt="Logo" className="h-10" />
          <p>VR World</p>
        </div>
        <div className="flex gap-8 justify-center">
          <p>Features </p>
          <p>Workflow</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
        <div className="justify-end flex gap-6 ">
          <button className="SignIn">Sign In</button>
          <button className="Create">Create an account</button>
        </div>
      </div>
      <hr className="h-px mt-3 bg-gray-600 border-0 " />
    </div>
  );
};

export default Navbar;
