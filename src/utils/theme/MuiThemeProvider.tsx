import React, { ReactNode, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '.';

type Props = {
	children: ReactNode;
};

const MuiThemeProvider = ({ children }: Props) => {
	const [mode] = useState<boolean>(false);
	return (
		<ThemeProvider theme={theme(mode)}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiThemeProvider;
