import Navbar from "./ui/Navbar";
import Lotr from "./pages/Lotr";
import Hobbit from "./pages/Hobbit";
import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Hobbit/>}/>
                <Route path="/lotr" element={<Lotr/>}/>
            </Routes>
        </div>
    )
}

export default App;
