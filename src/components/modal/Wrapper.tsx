import React, { ReactNode } from 'react';
import { Box, BoxProps, useTheme, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

interface Props extends BoxProps {
	children: ReactNode;
	hasCloseButton?: boolean;
	closeModal?: () => void;
}

const ModalWrapper = ({
	children,
	hasCloseButton,
	closeModal,
	...rest
}: Props) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: 'fixed',
				top: '0px',
				left: '0px',
				height: '100vh',
				width: '100%',
				backgroundColor: 'rgba(40, 83, 107, 0.7)',
				zIndex: theme.zIndex.modal,
				overflow: 'auto',
				padding: '15px',
			}}
		>
			<Box
				sx={{
					maxWidth: '480px',
					margin: '10rem auto',
					width: '100%',
					backgroundColor: 'background.paper',
					padding: { xs: '15px 20px', sm: '2rem', md: '3.5rem' },
					borderRadius: '5px',
					position: 'relative',
					...rest.sx,
				}}
			>
				{hasCloseButton && (
					<IconButton
						onClick={() => typeof closeModal !== 'undefined' && closeModal()}
						size={'small'}
						sx={{
							position: 'absolute',
							top: '-45px',
							right: '0px',
							backgroundColor: `${grey['400']} !important`,
							border: `1.5px solid ${grey['50']}`,
							color: theme.palette.primary.main,
						}}
					>
						<Close />
					</IconButton>
				)}
				{children}
			</Box>
		</Box>
	);
};

export default ModalWrapper;
