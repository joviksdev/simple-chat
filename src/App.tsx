import { useEffect } from 'react';
import Router from './router';
import { StorageKey, getItem } from './utils';
import { useAppDispatch } from './store/hooks';
import { setMessages, setIdentity } from './store/chat';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const chat = getItem(StorageKey.Chat);
		const identity = getItem(StorageKey.UserName);

		if (identity) {
			dispatch(setIdentity(identity));
		}
		if (chat) {
			console.log(chat);
			dispatch(setMessages(chat));
		}
	}, []);

	return <Router />;
}

export default App;
