import { memo, useRef } from "react";

function Search({ onChange }) {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  
  
  console.log("Search rendered--", inputRef);

  const handleFocus = () => {
    console.log("Search focus--", inputRef);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log('buttonRef-->>', buttonRef);
    onChange(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        className="search-input"
        placeholder="Search users..."
        onChange={handleChange}
      />
      <button ref={buttonRef} onClick={handleFocus}>Focus on input</button>
    </>
  );
}

export default memo(Search);
