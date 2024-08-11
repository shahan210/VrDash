import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
interface Feature {
  head: string;
  icon: JSX.Element;
  desc: string;
}

export const FeatureList: Feature[] = [
  {
    head: "Drag-and-Drop Interface",
    icon: <BotMessageSquare className="h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full" />,
    desc: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    head: "Multi-Platform Compatibility",
    icon: <Fingerprint className="h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full" />,
    desc: "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    head: "Built-in Templates",
    icon: <ShieldHalf className="h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full" />,
    desc: "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    head: "Real-Time Preview",
    icon: <BatteryCharging className="h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full" />,
    desc: "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    head: "Collaboration Tools",
    icon: <PlugZap className="h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full" />,
    desc: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    head: "Analytics Dashboard",
    icon: <GlobeLock className="h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full" />,
    desc: "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];
