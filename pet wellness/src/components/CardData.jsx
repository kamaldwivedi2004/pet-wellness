// components/CardData.jsx
import React from "react";
 import Card from "./Card";
import CardContent from "./CardContent";
import {
  FaBath,
  FaCut,
  FaSyringe,
  FaDog,
  FaPaw,
//   FaScissors,
//   FaBugSlash,
  FaHeart,
} from "react-icons/fa";

const grooming = [
  { title: "Spa Bath", icon: <FaBath size={30} /> },
  { title: "Knots/Mats Removal", icon: <FaDog size={30} /> },
  { title: "Full Grooming", icon: <FaPaw size={30} /> },
//   { title: "Nail Clipping", icon: <FaScissors size={30} /> },
  { title: "Stylish Hair Cuts", icon: <FaCut size={30} /> },
//   { title: "Anti-Tick Treatment", icon: <FaBugSlash size={30} /> },
  { title: "DeStresssing Massage", icon: <FaHeart size={30} /> },
];

export default function CardData() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {grooming.map((item, idx) => (
        <Card key={idx} className="text-center">
          <CardContent className="flex flex-col items-center justify-center">
            <div className="mb-2 text-pink-500">{item.icon}</div>
            <p className="text-sm font-medium">{item.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
