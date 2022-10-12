import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { Chat } from '../../utils';
import { getItem, saveItem } from '../../utils/storage';
import { StorageKey } from '../../utils';

// Define the initial state using that type
interface InitialState {
	identity: string;
	messages: Chat[];
}

const initialState: InitialState = {
	identity: '',
	messages: [],
};

export const counterSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setMessage: (state, action: PayloadAction<Chat>) => {
			let _messages: Chat[] | null = getItem(StorageKey.Chat);
			if (_messages) {
				_messages = [..._messages, action.payload];
				saveItem(StorageKey.Chat, _messages);
			} else {
				saveItem(StorageKey.Chat, [action.payload]);
			}

			state.messages = [...state.messages, action.payload];
		},
		setMessages: (state, action: PayloadAction<Chat[]>) => {
			state.messages = action.payload;
		},
		setIdentity: (state, action: PayloadAction<string>) => {
			saveItem(StorageKey.UserName, action.payload);
			state.identity = action.payload;
		},
	},
});

export const { setMessages, setMessage, setIdentity } = counterSlice.actions;

export default counterSlice.reducer;
