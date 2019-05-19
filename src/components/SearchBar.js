import React from 'react';

class SearchBar extends React.Component {
	state = {searchTerm: ''};

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form'>
					<div className='field'>
						<label>Image Search</label>
						<input type='text'
						       placeholder='Search image'
						       value={this.state.searchTerm}
						       onChange={e => this.setState({searchTerm: e.target.value})}/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
