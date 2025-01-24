import { useState } from "react";

export default function SearchBar() {
  const inputPlaceHolder = "Search for a task";
  const [searchKey, setSearchKey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchKey);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search-bar"
        placeholder={inputPlaceHolder}
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
      />
      <input type="submit" name="submit" id="Submit" value="Submit" />
    </form>
  );
}
