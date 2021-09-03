import './App.css';
import FooterNavBar from './Components/FooterNavBar/FooterNavBar';
import Header from './Components/Header/Header';
import Cardhome from "./views/Cardhome"
import News from "./views/News"
import Services from "./views/Services"
import Carousel from "./views/Carousel"
import Info from "./views/Info"
function App() {
  return (
    <div className="App">
      <Header/>
      <Cardhome/>
      <News/>
      <Services/>
      <Carousel/>
      <Info/>
      <FooterNavBar/>
    </div>
  );
}

export default App;
