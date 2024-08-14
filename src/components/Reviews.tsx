import { testimonials } from "../constants/Index";
const Reviews = () => {
  return (
    <div className="my-10 grid grid-cols-3 justify-center gap-10">
      {testimonials.map((item, i) => {
        return (
          <div key={i} className="border p-4 border-[#232323] bg-[#171717] flex flex-col justify-between rounded-lg">
            <p className="text-[#a5a3a3] text-md">{item.text}</p>
            <div className="flex gap-5 mt-5 items-center">
              <img src={item.image} alt="User" className="w-10 rounded-3xl" />
              <div>
                <p className="font-thin text-[#c6c3c3]">{item.user}</p>
                <p className=" italic text-[#5a5959]">{item.company}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
