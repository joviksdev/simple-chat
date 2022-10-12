import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatItem from '../chat-item';
import { Chat } from '../../utils';
import { useAppSelector } from '../../store/hooks';

const ChatBox = () => {
	const { messages } = useAppSelector((store) => store.chat);
	return (
		<Container component={'form'}>
			{messages &&
				messages.length > 0 &&
				messages.map((chat: Chat, key: number) => (
					<ChatItem key={`${chat.identity}-${key}`} chat={chat} />
				))}
		</Container>
	);
};

const Container = styled(Box)(({ theme }) => ({
	overflow: 'auto',
	height: '100vh',
	minHeight: '640px',
	paddingBottom: '80px',
	display: 'flex',
	flexDirection: 'column',
	gap: '15px',
}));

export default ChatBox;
