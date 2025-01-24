import ButtonComponent from "../ButtonComponent";

export default function AddToDoButton() {
  const buttonProperties = {
    hasIcon: true,
    hasText: true,
    text: "Add task",
    icon: <i className="bx bx-plus"></i>,
    display: "flex",
    handleClick: (e) => {
      addToDo(e);
    },
  };
  function addToDo(e) {
    console.log("add button");
    e.preventDefault();
  }

  return <ButtonComponent properties={buttonProperties} />;
}
