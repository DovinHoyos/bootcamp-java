import { useState } from "react";

export const SearchCategory = ({ searchCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 3) {
      searchCategory(inputValue);
    }

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Category"
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
};
