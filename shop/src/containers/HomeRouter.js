import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home"

export const HomeRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )       
}