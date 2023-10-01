"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";

const teamMember = [
  {
    name: "Zeel Vaghasiya",
    image:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1695749390~exp=1695749990~hmac=cdf88c7bb78dd8a63a221197864984a67806495afb99e3b3df410505ca8d7318",
    position: "Mern stack developer",
  },
  {
    name: "Kevin Thumbar",
    image:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1695749390~exp=1695749990~hmac=cdf88c7bb78dd8a63a221197864984a67806495afb99e3b3df410505ca8d7318",
    position: "Mern stack developer",
  },
];

function About() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="w-full flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl text-center font-bold text-gray-900 md:text-5xl md:leading-10">
            Empowering Healthcare Excellence
          </p>
          <p className="w-full text-center text-base text-gray-600 md:text-xl">
            Our hospital management system streamlines operations, enhances
            patient care, and ensures efficiency, providing a comprehensive
            healthcare solution.
          </p>
        </div>

        <hr className="mt-5" />
        {/* greetings */}
        <div className="mt-10 flex items-center">
          <div className="space-y-6 w-full">
            <p className="text-3xl w-full font-bold text-gray-900 md:text-4xl text-center">
              Meet our team
            </p>
            <p className="w-full text-base text-gray-700 md:text-xl text-center">
              Meet our talented developer team, a dedicated group of experts
              passionate about crafting innovative solutions.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        {/* <div className="grid grid-cols-2 w-[500px] gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20"> */}
        <div className="flex flex-wrap justify-center md:justify-evenly border-b border-gray-300 py-12 pb-20">
          {teamMember.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl text-center font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm text-center font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default About;
