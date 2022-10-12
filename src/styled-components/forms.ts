import { styled } from '@mui/material/styles';
import {
	FormLabel as MuiFormLabel,
	TextField,
	FormControl as MuiFormControl,
	Box,
	Button as MuiButton,
} from '@mui/material';
import { grey } from '@mui/material/colors';

export const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
	display: 'inline-block',
	marginBottom: theme.spacing(1),
	fontWeight: '600',
}));

export const FormInput = styled(TextField)(({ theme }) => ({}));

export const Button = styled(MuiButton)(({ theme }) => ({
	backgroundColor: `${theme.palette.primary.main} !important`,
	color: grey['50'],
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const Form = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(3),
}));
