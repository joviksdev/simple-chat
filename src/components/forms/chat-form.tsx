import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { FormInput, Button as MuiButton } from '../../styled-components';
import { grey } from '@mui/material/colors';
import { useAppDispatch } from '../../store/hooks';
import { setMessage } from '../../store/chat';

const ChatForm = () => {
	const dispatch = useAppDispatch();
	const params = useParams();

	const [userInput, setUserInput] = useState<string>('');
	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!userInput) {
			return;
		}
		if (params && params.identity) {
			dispatch(
				setMessage({
					identity: params.identity as string,
					message: userInput,
				})
			);
			setUserInput('');
		}
	};

	return (
		<Container component={'form'}>
			<FormInput
				placeholder={'Start typing...'}
				size={'small'}
				sx={{
					backgroundColor: grey['50'],
					borderRadius: '20px !important',
					'& .MuiOutlinedInput-notchedOutline': {
						border: 'none !important',
						borderRadius: '20px !important',
					},
				}}
				fullWidth
				value={userInput}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setUserInput(e.target.value)
				}
			/>
			<Button onClick={handleSubmit}>Send</Button>
		</Container>
	);
};

const Container = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	position: 'absolute',
	bottom: '0px',
	width: '100%',
	height: '70px',
	gap: '20px',
	display: 'flex',
	alignItems: 'center',
	padding: '15px',
	zIndex: '10',
}));

const Button = styled(MuiButton)(({ theme }) => ({
	backgroundColor: `${grey['50']} !important`,
	color: theme.palette.primary.main,
	borderRadius: '40px',
	minWidth: '100px',
}));

export default ChatForm;
