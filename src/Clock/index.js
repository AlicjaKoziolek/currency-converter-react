import { useDate } from "./useDate.js";
import { Time } from "./styled.js";

const formatDate = (date) => {
  return date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const Clock = () => {
  const date = useDate();

  return (
    <Time>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </Time>
  );
};

export default Clock;
