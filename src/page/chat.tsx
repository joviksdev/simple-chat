import React from 'react';
import { Container as MuiContainer, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import { ChatForm, ChatBox } from '../components';

const Chat = () => {
	const params = useParams();

	return (
		<Container>
			<ChatBox />
			<ChatForm />
		</Container>
	);
};

const Container = styled(Box)(({ theme }) => ({
	margin: '20px auto',
	maxWidth: '480px !important',
	minHeight: '640px',
	height: '100vh',
	border: `1px solid ${grey['300']}`,
	position: 'relative',
	overflow: 'hidden',
}));

export default Chat;
