import { todos } from "../../Constants";
import TodoCard from "./TodoCard";
import DashHeading from "./DashHeading";

export default function Dashboard() {
  return (
    <section>
      <DashHeading />
      {todos.map((todo, index) => (
        <TodoCard key={index} todoObject={todo} />
      ))}
    </section>
  );
}
