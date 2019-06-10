import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchTermSubmit = async term => {
    const imageResults = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: imageResults.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
