import { Divide, Heading1 } from "lucide-react";
import React from "react";
import Card from "../Card/Card";

function Doctor() {
  return (
    <>
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <hr className="mt-6" />
    </>
  );
}

export default Doctor;
