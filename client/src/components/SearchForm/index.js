import React from "react";

function SearchForm({handleChange, value, handleSubmit}) {
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input 
          className="input" 
          type="text" 
          placeholder="Harry Potter"
          onChange={handleChange}
          name="search"
          value={value}
          />
      </div>
      <div className="control">
        <button className="button is-primary" type="submit">
          Search
        </button>
      </div>
    </div>
    </form>
  )
}

export default SearchForm;