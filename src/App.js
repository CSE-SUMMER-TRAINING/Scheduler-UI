import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import NoWork from './pages/NoWork';
import Downloadass from './pages/Downloadass';
import Main from './pages/Main';
import Header from './pages/Header';
import Assignment from './pages/Assignment';
function App() {
    return (
        <BrowserRouter>
            <div>
                <main>

                    <switch>
                        <Routes>
                            <Route path="" element={<Main />} />
                        </Routes>
                    </switch>
                </main>
            </div>
            </BrowserRouter>
            )
}

            export default App;
