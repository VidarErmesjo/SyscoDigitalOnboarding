import {
	BrowserRouter,
	Switch
} from 'react-router-dom';

import { Dashboard } from './components/Dashboard';

export default function App(props: any) {
	// Deaktiver scrolling
	document.body.style.overflow = 'visible';

	return (
		<BrowserRouter>
			<Switch>
				<Dashboard/>
			</Switch>
		</BrowserRouter>
	);
}