import React from "react";
import "./SearchBar.css";

export default function SearchBar({
  setPage,
  setSearchTerm,
  nameSearch,
  setNameSearch,
}) {
  const handleSearch = (event) => {
    setNameSearch(event.target.value);
    setSearchTerm("");
    setPage(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <section>
      <div className="input-group">
        <button
          type="button"
          className=" input-group-text searchLogo"
          onClick={(event) => handleSubmit(event)}
        >
          <i className="bi bi-search"></i>
        </button>
        <input
          type="search"
          className="form-control searchInput"
          placeholder="Buscar..."
          onChange={(event) => handleSearch(event)}
          onKeyPress={(event) => handleKeyPress(event)}
        />
      </div>
    </section>
  );
}
