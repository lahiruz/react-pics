import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
	state = {results: []};

	onSearchTermSubmit = async (term) => {
		const imageResults = await axios.get('https://api.unsplash.com/search/photos', {
			params: {query: term},
			headers: {
				Authorization: 'Client-ID cabf593cdb47d08a676abea7ed91b819d04e416357ad23f1059d5551257beab8'
			}
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
