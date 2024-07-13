"use client";

import React from "react";
import Swal from "sweetalert2";

const BookingList = ({ booking, index }) => {
  const { firstname, lastname, email, phoneNumber } = booking?.customersDetails;
  const { checkIn, checkOut, roomsQuantity, adult, childen, totalPrice } =
    booking?.customersDetails.bookingDetails;

  // console.log(checkIn);

  // delete

  const handleDelete = (_id) => {
    fetch(`https://hotel-relex-server.onrender.com/booking/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Booking is Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload(3);
      });
  };

  return (
    <tbody>
      <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <p>{firstname}</p>
          <p>{lastname}</p>
        </td>
        <td className="p-3">
          <p>{email}</p>
        </td>
        <td className="p-3">
          <p>{phoneNumber}</p>
        </td>
        <td className="p-3">
          <p>{checkIn}</p>
        </td>
        <td className="p-3">
          <p>{checkOut}</p>
        </td>
        <td className="p-3 text-right">
          <p>${totalPrice}</p>
        </td>
        <td className="p-3 text-right">
          <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
            <span>Pending</span>
          </span>
        </td>
        <td>
          <button
            className="px-2 py-2 bg-red-600 text-white rounded-md"
            onClick={() => handleDelete(booking._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default BookingList;
