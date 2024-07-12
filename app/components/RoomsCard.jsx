import Link from "next/link";
import React from "react";

const RoomsCard = ({ item }) => {
  const { _id, name, image, location, price } = item;

  return (
    <div>
      <article className="flex flex-col bg-gray-50 shadow-lg">
        <Link
          rel="noopener noreferrer"
          href={`/rooms/${_id}`}
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 bg-gray-500"
            src={image}
          />
        </Link>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracking-wider uppercase hover:underline text-violet-600"
          >
            {/* {location.city} */}
            {/* Torento */}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {name}
          </h3>
          <div className="flex justify-between pt-3    ">
            <div>
              <Link
                className="bg-violet-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                href={`/rooms/${_id}`}
              >
                Book
              </Link>
            </div>
            <div>
              <h3 className="text-xl text-slate-800 font-semibold">
                {" "}
                ${price}
              </h3>
              <span>a night</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RoomsCard;
