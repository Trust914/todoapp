import CurrentDate from "../CurrentDate.jsx";
import { daysList } from "../../Constants.jsx";

export default function DateComponent() {
  const today = CurrentDate();
  
  return (
    <div>
      <h1>{daysList[today.day]}</h1>
      <h2>{`${today.dayDate}/${today.month}/${today.year}`}</h2>
    </div>
  );
}
