import { useDate } from "./useDate.js";
import "./style.css";

const Clock = () => {
  const date = useDate();

  return (
  <div className="clock">
    Dzisiaj jest 
    {" "}
    {date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}
    </div>
  );
};

export default Clock;
