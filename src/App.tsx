import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import DevelopmentProcess from './components/DevelopmentProcess';
import TechnologyStack from './components/TechnologyStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Industries />
        <WhyChooseUs />
        <DevelopmentProcess />
        <TechnologyStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
