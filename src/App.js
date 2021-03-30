import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
	const url =
		'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

	const { posts, isLoading, error } = useFetch(url);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Произошла ошибка: {error}</p>;
	}

	return <div className='App'>Hello</div>;
}

export default App;
