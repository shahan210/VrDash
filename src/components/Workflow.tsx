import { checklistItems } from "../constants/Index";
import Code from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
const Workflow = () => {
  return (
    <div className="mt-10">
      <hr className="h-px mt-3 bg-[#232323] border-0" />
      <div className="mt-20">
        <p className="mt-10 text-6xl text-center">
          Accelerate your <span className="devlop !text-6xl !font-normal">coding workflow.</span>
        </p>
        <div className="flex my-5 gap-10">
          <img src={Code} alt="Code" className="w-1/2" />
          <div className="flex flex-col ">
            {checklistItems.map((item, i) => {
              return (
                <div key={i} className="flex gap-10 justify-center my-8 da">
                  <CheckCircle2 className="text-green-400 h-10 w-10 justify-center items-center rounded-full" />
                  <div className="flex flex-col my-1">
                    <h1 className="text-xl text-white">{item.title}</h1>
                    <p className="desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
