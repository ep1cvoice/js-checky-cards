import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path='/' element={<div> Home</div>}></Route>
						<Route path='/main' element={<div> Main</div>}></Route>
						<Route
							path='/addquestion'
							element={<div> Add a question</div>}></Route>
						<Route path='/forbidden' element={<div> Forbidden</div>}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
