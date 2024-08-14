import { CheckCircle2 } from "lucide-react";
import { pricing } from "../constants/Index";
const Pricing = () => {
  return (
    <div>
      <p className="sideHeadings">Pricing</p>
      <div className="mt-5 grid lg:grid-cols-3 gap-5 items-center justify-center">
        {pricing.map((item, i) => {
          return (
            <div key={i} className={item.title !== "Pro" ? "priceBox lg:!scale-95" : "priceBox"}>
              <h1 className="text-3xl">
                {item.title}
                {item.title === "Pro" && <span className="popular">(Most Popular)</span>}{" "}
              </h1>
              <p className="text-3xl font-semibold">
                {item.price} {""}
                <span className="text-gray-500 text-sm">/Month</span>
              </p>
              {item.features.map((feature, i) => {
                return (
                  <p key={i} className="flex items-center gap-2 ">
                    <CheckCircle2 />
                    {feature}
                  </p>
                );
              })}
              <button className="subscribe">Subscribe</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
