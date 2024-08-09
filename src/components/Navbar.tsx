const Navbar = () => {
  return (
    <div className="p-4 ">
      <div className=" text-white text-semibold grid grid-cols-3">
        <div>VR World</div>
        <div className="flex gap-8 justify-center">
          <p>Features </p>
          <p>Workflow</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
        <div className="justify-end flex gap-6 ">
          <button className="border border-white p-2 rounded-lg">Sign In</button>
          <button className="border border-orange-500 p-2 bg-orange-500 text-white rounded-lg">Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
