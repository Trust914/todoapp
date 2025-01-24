import IconTexPlaceholder from "../../IconTextPlaceholder";
import { ToDo, TaskStatus, CompletedTask } from "./IconsConstants";

export function ToDoIcon() {
  return <IconTexPlaceholder properties={ToDo} />;
}

export function TaskStatusIcon() {
    return <IconTexPlaceholder properties={TaskStatus} />;
  }

  export function CompletedTaskIcon() {
    return <IconTexPlaceholder properties={CompletedTask} />;
  }