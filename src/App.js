import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

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
