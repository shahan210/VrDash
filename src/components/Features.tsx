import { FeatureList } from "../constants/Index";
const Features = () => {
  console.log(FeatureList);

  return (
    <div className="mt-10 flex flex-col justify-center">
      <div className="flex justify-center">
        <p className="feature">Feature</p>
      </div>
      <div className="flex justify-center">
        <p className="mt-10 text-6xl font-n">
          Easily build <span className="devlop !font-normal">your code</span>{" "}
        </p>
      </div>
      <div className=" grid grid-cols-3 mt-20 gap-14">
        {FeatureList.map((feature, i) => {
          return (
            <div key={i}>
              <div className="flex gap-5 items-center">
                {feature.icon}
                <p className="text-xl">{feature.head}</p>
              </div>
              <div className="mt-6 ml-14">
                <p className="text-[#737373] p-2 text-md">{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
