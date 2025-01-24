import { todos } from "../../../Constants";
import TodoCard from "../TodoCard";
import LeftDashHeading from "./LeftHeading";

export default function LeftDashCard() {
  return (
    <section>
      <LeftDashHeading />
      {todos.map((todo, index) => (
        <TodoCard key={index} todoObject={todo} />
      ))}
    </section>
  );
}
