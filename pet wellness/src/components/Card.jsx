// components/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
}
