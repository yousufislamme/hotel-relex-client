"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const RoomDetails = ({ params }) => {
  const id = params.id;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://hotel-relex-server.vercel.app/hotels/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render.

  // console.log(data);

  //  booking
  const handleBooking = (e) => {
    e.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const checkIn = form.checkIn.value;
    const checkOut = form.checkOut.value;
    const bookingData = {
      hotel: data,
      checkIn,
      checkOut,
    };
    console.log(bookingData);

    // data post
    fetch("https://hotel-relex-server.onrender.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("booking", data);
        alert("booking The hotel");
        form.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };
  return (
    <div className="px-4 lg:px-24 py-16 space-y-6 ">
      {/* breadcrumb */}

      <nav
        aria-label="breadcrumb"
        className="w-full p-4 bg-white text-gray-800"
      >
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link
              rel="noopener noreferrer"
              href={"/"}
              title="Back to homepage"
              className="hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 text-gray-600"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Room Details
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-currenttext-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Bookings
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
          </li>
        </ol>
      </nav>
      {/* img  */}

      <div>
        {loading === true ? (
          <div
            role="status"
            className="items-center place-content-center content-center place-items-center flex"
          >
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full   lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={data?.image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl ">
                {data?.name}
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 19, 2021
              </span>
              <p>{data?.description}</p>
              {/* list  */}
              <div>
                <h3 className="font-semibold text-lg">Amenities:</h3>
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-2">
                  {data?.amenities.map((list) => (
                    <li className="flex items-center space-x-2 " key={list}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-violet-600"
                      >
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                      </svg>
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* list  */}
            </div>
          </a>
        )}
      </div>

      {/* date  */}
      <form
        onSubmit={handleBooking}
        className="flex flex-col justify-around  lg:flex lg:flex-row place-items-center w-full"
      >
        <div className="flex justify-between flex-col lg:flex-row  px-2 items-center gap-4 lg:gap-8  ">
          <div>
            <h3>Check In Date</h3>
            <input
              type="date"
              name="checkIn"
              id="checkIn"
              className="px-2 py-2  shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-orange-100 focus:ring-violet-600 ring-violet-600"
            />
          </div>
          <h2 className="text-lg font-bold "> To</h2>
          <div>
            <h3>Check Out Date </h3>
            <input
              type="date"
              name="checkOut"
              id="checkOut"
              className="px-2 py-2  shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-orange-100 focus:ring-violet-600 ring-violet-600"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-1/3 mt-8 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-600 focus:ring-violet-600 hover:ring-violet-600 text-gray-50"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default RoomDetails;
