import { monthList } from "../../../Constants";
import CurrentDate from "../../CurrentDate";
import AddToDoButton from "./AddToDoButton";
import { ToDoIcon } from "../iconss/Icons";

export default function LeftDashHeading() {
  const today = CurrentDate();
  const monthVal = monthList[today.month];
  return (
    <div>
      <div>
        <ToDoIcon />
        <AddToDoButton />
      </div>
      <h2>
        {`${today.day} ${
          monthVal.length > 5 ? monthVal.substring(0, 3) : monthVal
        }`}{" "}
        .Today
      </h2>
    </div>
  );
}
