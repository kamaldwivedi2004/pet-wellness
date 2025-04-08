// components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";
import CardData from "./CardData";

const services = [
  {
    title: "Dog Training At Home",
    icon: <GiDogHouse size={50} className="text-yellow-500" />,
  },
  {
    title: "Online Vet Consultation",
    icon: <MdOutlineMedicalServices size={50} className="text-green-500" />,
  },
  {
    title: "At Home Pet Vaccination",
    icon: <FaSyringe size={50} className="text-blue-500" />,
  },
];

export default function Services() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our Pet Grooming Services for Your Pet
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg p-6 bg-white text-center"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="font-semibold text-lg">{service.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Grooming cards rendered here */}
      <CardData />
    </div>
  );
}
