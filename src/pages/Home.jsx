import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Home = () => {
    return (
        <>
            <Header/>
            <main className="py-8">
              <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Home;
