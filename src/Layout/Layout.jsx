import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="mainLayout">
            <Outlet />
        </div>
    )
}

export default Layout