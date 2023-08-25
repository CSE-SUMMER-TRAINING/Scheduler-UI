import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import NoWork from './pages/NoWork';
import Downloadass from './pages/Downloadass';
function App() {
    return (
        <BrowserRouter>
            <div>
                <main>

                    <switch>
                        <Routes>
                            <Route path="" element={<Login />} />
                        </Routes>
                    </switch>
                </main>
            </div>
            </BrowserRouter>
            )
}

            export default App;
