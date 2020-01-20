import React from "react";
import "./searchform.css"

function SearchForm(props) {

  // handleFormSubmit = () => 
  
  return (
    <form>
      <div className="form-group">
        <input
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a User"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;