import {
	BrowserRouter,
	Switch
} from 'react-router-dom';

import { Dashboard } from './components/Dashboard';

export default function App(props: any) {
	// Låse scrolling
	document.body.style.overflowX = 'hidden';

	return (
		<BrowserRouter>
			<Switch>
				<Dashboard/>
			</Switch>
		</BrowserRouter>
	);
}