const React= require('react');

class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <input type="text" id="search-input"></input>Search Here!
      </div>
    )
  }
}

module.exports = Search;