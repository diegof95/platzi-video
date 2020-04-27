import React from 'react';

import './search.css';

const SearchLayout = (props) => (
  <form
    className="Search-form"
    onSubmit={props.onSubmit}
  >
    <input
      className="Search-input"
      type="text"
      placeholder="Buscar"
      value={props.value}
      onChange={props.onChange}
    />
  </form>
);

export default SearchLayout;