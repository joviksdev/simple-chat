import React, { useState } from 'react';
import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button, StartChatModal } from '../components';
import { grey } from '@mui/material/colors';

const StartChat = () => {
	const [isDisplayModal, setDisplayModal] = useState<boolean>(false);
	return (
		<Container>
			{isDisplayModal && (
				<StartChatModal closeModal={() => setDisplayModal(false)} />
			)}
			<StartChatButton onClick={() => setDisplayModal(true)}>
				Start Chat
			</StartChatButton>
		</Container>
	);
};

const StartChatButton = styled(Button)(({ theme }) => ({
	backgroundColor: `${theme.palette.primary.main} !important`,
	color: grey['50'],
	fontWeight: '600',
	minWidth: '120px',
}));

const Container = styled(MuiContainer)(({ theme }) => ({
	paddingTop: '20px',
	paddingBottom: '20px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export default StartChat;
