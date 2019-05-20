import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID cabf593cdb47d08a676abea7ed91b819d04e416357ad23f1059d5551257beab8'
	}
});
