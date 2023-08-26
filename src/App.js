import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import NoWork from './pages/NoWork';
import Downloadass from './pages/Downloadass';
import Main from './pages/Main';
import NeedForAss from "./pages/NeedForAss";
import Assignment from './pages/Assignment';
import AvailableDays from './pages/AvailableDays';
import EnterData from './pages/EnterData';
import ShareProvider from "./ShareProvider"
function App() {
    return (
			<ShareProvider>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Login />} />
						<Route path="/respMain" element={<Main />} />
					</Routes>
				</BrowserRouter>
			</ShareProvider>

			// <ShareProvider>
			// 	<BrowserRouter>
			// 		<div>
			// 			<main>
			// 				<switch>
			// 					<Routes>
			// 						<Route path="" element={<Login />} />
			// 					</Routes>
			// 				</switch>
			// 			</main>
			// 		</div>
			// 	</BrowserRouter>
			// </ShareProvider>
		)
}
export default App;
