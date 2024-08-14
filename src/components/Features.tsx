import { FeatureList } from "../constants/Index";
const Features = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center">
      <div className="flex justify-center">
        <p className="feature">Features</p>
      </div>
      <div className="flex justify-center">
        <p className="sideHeadings">
          Easily build <span className="devlop !text-3xl md:!text-5xl !font-normal">your code</span>{" "}
        </p>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-14">
        {FeatureList.map((feature, i) => {
          return (
            <div key={i}>
              <div className="flex gap-5 items-center">
                {feature.icon}
                <p className="text-xl">{feature.head}</p>
              </div>
              <div className="mt-6 ml-14">
                <p className="desc">{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
