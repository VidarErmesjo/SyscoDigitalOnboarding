import React from 'react';

import { AppProvider } from './AppContext';
import { MenuProvider } from './MenuContext';
import { UserProvider } from './UserContext';
import Dashboard from './containers/Home/Dashboard';

export default function App() {
	return (
		<AppProvider>
			<MenuProvider>
				<UserProvider>
					<Dashboard/>
				</UserProvider>
			</MenuProvider>
		</AppProvider>
	);
}