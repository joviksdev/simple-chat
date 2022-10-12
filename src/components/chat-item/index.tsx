import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AccountCircle } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { Chat } from '../../utils';
import { useAppSelector } from '../../store/hooks';

interface Props {
	chat: Chat;
}

const ChatItem = ({ chat }: Props) => {
	const { identity } = useAppSelector((store) => store.chat);
	const theme = useTheme();
	return (
		<Container>
			<AccountCircle
				sx={{
					fontSize: '70px',
					color:
						identity === chat.identity
							? theme.palette.primary.main
							: grey['300'],
					order: identity === chat.identity ? '2' : '1',
				}}
			/>
			<MessageContainer
				sx={{
					backgroundColor:
						identity === chat.identity
							? theme.palette.primary.main
							: grey['200'],
					color:
						chat.identity === identity
							? grey['50']
							: theme.palette.primary.main,
					order: identity === chat.identity ? '1' : '2',
				}}
			>
				<Typography variant={'body1'}>{chat.message}</Typography>
			</MessageContainer>
		</Container>
	);
};

const MessageContainer = styled(Box)(({ theme }) => ({
	backgroundColor: grey['200'],
	borderRadius: '6px',
	flex: 1,
	padding: '8px',
	alignSelf: 'flex-start',
	marginTop: '10px',
}));

const Container = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	padding: '15px',
}));

export default ChatItem;
