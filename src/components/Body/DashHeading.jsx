import { monthList } from "../../Constants";
import CurrentDate from "../CurrentDate";
import AddToDoButton from "./AddToDoButton";

export default function DashHeading() {
  const today = CurrentDate();
  const monthVal = monthList[today.month];
  return (
    <div>
      <div>
        <AddToDoButton/>
      </div>
      <h2>{`${today.day} ${
        monthVal.length > 5 ? monthVal.substring(0, 3) : monthVal
      }`} .Today
      </h2>
    </div>
  );
}
