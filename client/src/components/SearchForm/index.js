import React from "react";

function SearchForm() {

  
  return (
    <form onSubmit={() => console.log('submit')}>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="Find a repository"/>
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