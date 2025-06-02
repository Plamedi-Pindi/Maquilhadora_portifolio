import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../Layout/Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter