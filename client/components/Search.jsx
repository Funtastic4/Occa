import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="search">
        <input type="text" id="search-input" placeholder="Enter Location..."></input>
      </div>
    )
  }
}

export default Search;
