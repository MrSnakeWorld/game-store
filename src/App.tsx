import {createBrowserHistory} from 'history';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import useAuthModal from './components/AuthModal/useAuthModal';
import Header from './components/Header/Header';
import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';
import {Sticky, StickyContainer} from 'react-sticky';
import useDBInit from './tools/hooks/idb/useDBInit';

export const history = createBrowserHistory();

const App = () => {
	const {modal, onOpen, setAuth} = useAuthModal();

	useDBInit();

	return (
		<div className="app">
			<StickyContainer>
				<Sticky>
					{({style}) => (
						<div style={{...style, zIndex: 100}}>
							<Header 
								onOpen={onOpen}
								setAuth={setAuth}
							/>
						</div>
					)}
				</Sticky>

				<Routes>     
					<Route path="/game/:id" element={<GamePage />} />
					<Route path="/" element={<HomePage />} />   
					<Route path="/user/:id" element={<UserPage />} />
				</Routes>
				{modal}
			</StickyContainer>
		</div>
	);
};

export default App;
