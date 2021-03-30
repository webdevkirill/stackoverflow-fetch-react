import './App.css';
import { useFetch } from './hooks/useFetch';
import { Message } from './components/Message';

function App() {
	const url =
		'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

	const { posts, isLoading, error } = useFetch(url);

	if (isLoading) {
		return <Message>Loading...</Message>;
	}

	if (error) {
		return <Message color='red'>Произошла ошибка: {error}</Message>;
	}

	return <div className='App'>Hello</div>;
}

export default App;
