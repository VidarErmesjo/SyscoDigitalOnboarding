import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import App from './App';
import theme from './theme';
//import reportWebVitals from './reportWebVitals';
import { makeServer } from './server';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
