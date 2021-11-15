import { Routes , Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "../Profile";
import News from "../News/FunctionNews/News";

const Routing = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </div>
    )
}

export default Routing;