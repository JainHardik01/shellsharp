import BuildByExpert from './components/BuildByExpert'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Overwork from './components/Overwork'
import Tailored from './components/Tailored'


const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Overwork />
            <Tailored />
            <BuildByExpert />
            <Features />
            <CTA />
            <Footer />
        </>
    )
}

export default App
