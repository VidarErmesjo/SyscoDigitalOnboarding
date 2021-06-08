import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import App from 'App';
import theme from 'theme';
import { makeServer } from 'server';

if(process.env.NODE_ENV === "development") {
	makeServer({ environment: "development" })
}

ReactDOM.render(
	<React.StrictMode>		
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<BrowserRouter>
				<Switch>
					<App/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
