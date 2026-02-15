import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import HomePage from '../pages/HomePage/';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path='/' element={<HomePage />}></Route>

						<Route path='/main' element={<div> Main</div>}></Route>

						<Route path='/addquestion' element={<div> Add a question</div>}></Route>
						
						<Route path='/forbidden' element={<div> Forbidden</div>}></Route>

						<Route path='/question/:id' element={<div> Question Page </div>}></Route>

						<Route path='*' element={<NotFoundPage />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
