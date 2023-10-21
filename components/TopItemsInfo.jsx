import { useState, useEffect } from "react";
import TrackItem from "./TrackItem";

function TopItemsInfo({ topItems }) {
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const currentDate = new Date();
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
      "December"
    ];
    const monthName = months[currentDate.getMonth()];
    setCurrentMonth(monthName);
  }, []);
  return (
    <div className="mt-4">
      <h1 className="text-center"> Top 5 Songs of {currentMonth}</h1>
      {topItems.map((item) => (
        <TrackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TopItemsInfo;
