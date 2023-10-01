import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="w-[250px] rounded-md border mx-auto">
        <div className="mx-auto mt-7 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
          <img
            src="images\Cardiology.png"
            className="h-9 w-9 text-gray-700 hover:h-12 hover:w-12 ease-in-out duration-300"
          />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-semibold">Zeel</h1>
          <p className="mt-3 text-sm text-gray-600">my name is zeel</p>
          <p className="mt-3 text-sm text-gray-600">my name is zeel</p>
          <p className="mt-3 text-sm text-gray-600">my name is zeel</p>
          <p className="mt-3 text-sm text-gray-600">my name is zeel</p>
          <Link
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
