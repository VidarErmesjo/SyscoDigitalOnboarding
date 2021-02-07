import React from 'react';

import { AppProvider } from './AppContext';
import { UserProvider } from './UserContext';
import Dashboard from './containers/Home/Dashboard';

export default function App() {
	return (
		<AppProvider>
			<UserProvider>
				<Dashboard/>
			</UserProvider>
		</AppProvider>
	);
}