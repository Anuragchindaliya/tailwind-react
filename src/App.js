import "./App.css";
import Content from "./components/Content";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistic from "./components/Statistic";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Teams from "./components/Teams";
import Blog from "./components/Blog";
import ContactMap from "./components/ContactMap";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Content />
      <Blog />
      <Statistic />
      <Teams />
      <Steps />
      <Testimonials />
      <Gallery />
      <Cta />
      <ContactMap />
      <Footer />
    </>
  );
}

export default App;
