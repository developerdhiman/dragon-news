import React, { useEffect, useState } from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function RealTimeDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  // Format date as: Sunday, November 27, 2025
  const formattedDate = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return <div className="font-bold">{formattedDate}</div>;
}

export default RealTimeDate;
