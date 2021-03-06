import React from "react";

const SearchBar = ({
  setSearchTerm,
  onSearchTermSubmit,
  refreshTrending,
  searchTerm,
  handleChange,
  filterSelection,
  gifSize,
}) => {
  return (
    <div
      className="searchbar"
      style={{ marginTop: "1vh", textAlign: "center" }}
    >
      <input
        placeholder="Search by keywords "
        id="searchTerm"
        onChange={setSearchTerm}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onSearchTermSubmit(searchTerm, handleChange, 24)
          }
        }}
        style={{ width: 300 }}
      />
      <br></br>
      {searchTerm && handleChange && (
        <button
          className="btn-primary"
          onClick={() => onSearchTermSubmit(searchTerm, handleChange, 24)}
          style={{
            width: 50,
            marginTop: 5,
            marginLeft: 5,
            boxShadow: "none",
            outline: "none",
            borderRadius: "10px",
          }}
        >
          🔍
        </button>
      )}
      <button
        className="btn-success"
        style={{
          width: 50,
          fontSize: 16,
          marginLeft: 5,
          marginTop: 5,
          boxShadow: "none",
          outline: "none",
          borderRadius: "10px",
        }}
        onClick={refreshTrending}
      >
        ⟳
      </button>
    </div>
  );
};

export default SearchBar;
