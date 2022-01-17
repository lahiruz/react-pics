import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFromSubmit = event => {
    event.preventDefault();

    this.props.onSearchTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search Image..."
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
