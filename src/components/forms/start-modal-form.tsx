import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import {
	FormLabel,
	FormInput,
	FormControl,
	Form,
	Button,
} from '../../styled-components';
import { LINKS } from '../../utils';
import { useAppDispatch } from '../../store/hooks';
import { setIdentity } from '../../store/chat';

const StartModalForm = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [name, setName] = useState<string>('');
	const [nameError, setNameError] = useState<string>('');
	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// Simple input validation
		if (name === '') {
			return setNameError('Enter you name');
		}

		// Navigate to chat page
		// dispatch(setIdentity(name));
		navigate(`${LINKS.Chat}/${name}`);
	};
	return (
		<Form component={'form'}>
			<FormControl>
				<FormLabel>Enter name</FormLabel>
				<FormInput
					fullWidth
					placeholder={'Enter you name here...'}
					error={nameError ? true : false}
					helperText={nameError}
					value={name}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						const value = e.target.value;
						value.length > 0 && setNameError('');
						setName(value);
					}}
				/>
			</FormControl>
			<Button onClick={handleSubmit} size={'large'}>
				Start
			</Button>
		</Form>
	);
};

export default StartModalForm;
