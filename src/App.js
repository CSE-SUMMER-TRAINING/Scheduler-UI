import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import EnterData from './pages/EnterData';
import Main from "./pages/Main"
import ShareProvider from "./ShareProvider"

function App() {
    return (
			<ShareProvider>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Login />} />
						<Route path="/respMain" element={<EnterData />} />
						<Route path="/main" element={<Main />} />
					</Routes>
				</BrowserRouter>
			</ShareProvider>
		)
}
export default App;
