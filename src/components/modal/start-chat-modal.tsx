import React from 'react';
import ModalWraper from './Wrapper';
import StartModalForm from '../forms/start-modal-form';

interface Props {
	closeModal: () => void;
}

const StartChatModal = ({ closeModal }: Props) => {
	return (
		<ModalWraper hasCloseButton closeModal={closeModal}>
			<StartModalForm />
		</ModalWraper>
	);
};

export default StartChatModal;
