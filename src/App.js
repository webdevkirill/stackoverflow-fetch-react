import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
	const url =
		'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

	const { posts, isLoading } = useFetch(url);

	return <div className='App'>Hello</div>;
}

export default App;
