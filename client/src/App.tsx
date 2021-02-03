import React from 'react';

import { AppProvider } from "./AppContext";
import Dashboard from './containers/Home/Dashboard';

export default function App() {
  return (
    <AppProvider>
      <Dashboard/>
    </AppProvider>
  );
}