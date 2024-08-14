import { resourcesLinks } from "../constants/Index";
import { communityLinks } from "../constants/Index";
import { platformLinks } from "../constants/Index";
const Footer = () => {
  return (
    <div className="mt-15">
      <hr className="h-[.5px] mt-3 bg-[#858383] border-0 " />

      <div className="grid grid-cols-3 gap-10 mt-10 items-center">
        <div>
          <h1 className="text-lg font-semibold">Resources</h1>
          {resourcesLinks.map((item, i) => {
            return (
              <p key={i} className="hover:text-white text-gray-500 animateButton my-3 text-sm cursor-pointer">
                {item.text}
              </p>
            );
          })}
        </div>
        <div>
          <h1 className="text-lg font-semibold">Platform</h1>
          {platformLinks.map((item, i) => {
            return (
              <p key={i} className="hover:text-white text-gray-500 animateButton my-3 text-sm cursor-pointer">
                {item.text}
              </p>
            );
          })}
        </div>
        <div>
          <h1 className="text-lg font-semibold">Community</h1>
          {communityLinks.map((item, i) => {
            return (
              <p key={i} className="hover:text-white text-gray-500 animateButton my-3 text-sm cursor-pointer">
                {item.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
