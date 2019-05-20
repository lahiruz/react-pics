import React from 'react';

import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';

class App extends React.Component {
	state = {results: []};

	onSearchTermSubmit = async (term) => {
		const imageResults = await unsplash.get('/search/photos', {
			params: {query: term}
		});

		this.setState({results: imageResults.data.results});
	};

	render() {
		return (
			<div className='ui container' style={{marginTop: '10px'}}>
				<SearchBar onSearchTermSubmit={this.onSearchTermSubmit}/>
				<h1>{this.state.results.length} images found</h1>
			</div>
		);
	}
}

export default App;
