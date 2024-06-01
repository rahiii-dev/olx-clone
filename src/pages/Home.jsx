import Header from "../components/Header";
import ItemsList from "../components/ItemsList";
const Home = () => {
    return (
        <>
            <Header/>
            <main className="py-4">
              <ItemsList/>
            </main>
        </>
    );
}

export default Home;
