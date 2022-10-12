import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StartChat, Chat } from '../page';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'}>
					<Route index element={<StartChat />} />
					<Route path={'chat/:identity'} element={<Chat />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
