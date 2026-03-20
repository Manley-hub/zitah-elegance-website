import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Collections';
import Sermons from './components/Gallery';
import Testimonials from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Sermons />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
