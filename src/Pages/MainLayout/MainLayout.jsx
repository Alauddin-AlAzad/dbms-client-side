import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="font-sans">
            <Navbar/>
            <h1 className="font-bold">This is Main LayOut</h1>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;