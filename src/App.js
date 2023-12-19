import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";
import TheAllSeeingEye from "./pages/TheAllSeeingEye";
import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<TheAllSeeingEye/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
            </Routes>
        </div>
    )
}

export default App;
