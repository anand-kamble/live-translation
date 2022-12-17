import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import './styles/index.css';

export interface AppState {
	activePage: 'home' | 'about';
}

function App() {
	const [state, setState] = useState<AppState>({
		activePage: 'home',
	});
	useEffect(() => {
		document.body.classList.add('bg-slate-800');
	}, []);

	return (
		<>
			<Header state={state} setState={setState} />
			{{ home: <Home />, about: <About /> }[state.activePage]}
		</>
	);
}

export default App;
