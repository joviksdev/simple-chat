import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {}

const Button = ({ children, ...rest }: Props) => {
	return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
