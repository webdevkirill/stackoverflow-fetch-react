import { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { Message } from './components/Message';
import PostList from './components/PostList/PostList';
import { SortingChangeButton } from './components/SortingChangeButton';
import { AppWrapper } from './components/AppWrapper';

function App() {
	const url =
		'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow';

	const { posts, isLoading, error } = useFetch(url);

	const [isReverceSort, setIsReverceSort] = useState(false);

	if (isLoading) {
		return <Message>Loading...</Message>;
	}

	if (error) {
		return <Message color='red'>Произошла ошибка: {error}</Message>;
	}

	return (
		<div className='App'>
			<AppWrapper>
				<SortingChangeButton
					onClick={() => setIsReverceSort((prevState) => !prevState)}
				>
					Изменить направление сортировки
				</SortingChangeButton>
				<PostList posts={posts} isReverceSort={isReverceSort} />
			</AppWrapper>
		</div>
	);
}

export default App;
