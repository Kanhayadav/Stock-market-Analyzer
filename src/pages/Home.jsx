import Navbar from "../components/Navbar"
import StockTicker from "../components/Stockticker"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import FeatureSelection from "../components/FeatureSelection"
import Auth from "../components/Auth"

function Home() {
    return (
        <>
            <StockTicker />
            <Navbar />
            <Hero />
            <FeatureSelection />
            <Auth />
            <Footer />
        </>
    )
}

export default Home