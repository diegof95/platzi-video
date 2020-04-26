import React from 'react';

import './search.css';

const SearchLayout = (props) => (
  <form
    className="Search-form"
    onSubmit={props.onSubmits}
  >
    <input
      className="Search-input"
      type="text"
      placeholder="Buscar"
    />
  </form>
);

export default SearchLayout;