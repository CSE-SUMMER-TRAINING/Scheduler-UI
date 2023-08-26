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
import AssignE from './pages/AssignE';

function App() {
    return (
        <BrowserRouter>
            
                        <Routes>
                            <Route path="" element={<Main />} />
                            <Route path="/respMain" element={<Main />} />

                        </Routes>
                
            </BrowserRouter>
    )
}
export default App;
