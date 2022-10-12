import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import MuiThemeProvider from './utils/theme/MuiThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</Provider>
	</React.StrictMode>
);
