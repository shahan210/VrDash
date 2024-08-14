import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
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
export const checklistItems = [
  {
    title: "Code merge made easy",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
];
export const pricing = [
  {
    title: "Free",
    price: "$0",
    features: ["Private board sharing", "5 Gb Storage", "Web Analytics", "Private Mode"],
  },
  {
    title: "Pro",
    price: "$10",
    features: ["Private board sharing", "10 Gb Storage", "Web Analytics (Advance)", "Private Mode"],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: ["Private board sharing", "Unlimited Storage", "High Performance Network", "Private Mode"],
  },
];
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
