import SearchBar from "./SearchBar";
import Date from "./DateComponent";
// import "../../index.css";

export default function Header() {
  return (
    <div className="">
      <h1>
        Dash<span>board</span>
      </h1>
      <SearchBar />
      <Date />
    </div>
  );
}
