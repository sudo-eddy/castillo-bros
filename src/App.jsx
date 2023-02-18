import './App.css';
import Header from './components/header/Header'
import PriceCards from './components/price-cards/PriceCards';
import Featured from './components/featured-item/Featured';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
// import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header />
    <Featured />
    <Carousel />
    <PriceCards />
    <Footer />
    </>
  );
}

export default App;
