import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

function TopItemsInfo({ topItems }) {
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const monthName = months[currentDate.getMonth()];
    setCurrentMonth(monthName);
  }, []);
  return (
    <div>
      <h1>Top 5 Canciones de {currentMonth}</h1>
      {topItems.map((item) => (
        <TaskItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TopItemsInfo;
