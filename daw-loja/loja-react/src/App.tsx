import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Brands } from "./components/Brand";
import { Newsletter } from "./components/NewsLetter";
import { Product } from "./components/Product";


function App() {
  const brands = [
    {alt: 'brand1', source: 'assets/images/brand1.png'},
    {alt: 'brand2', source: 'assets/images/brand2.png'},
    {alt: 'brand3', source: 'assets/images/brand3.png'},
    {alt: 'brand4', source: 'assets/images/brand4.png'},
    {alt: 'brand5', source: 'assets/images/brand5.png'}
  ];
  
  return (
    <div>

      <Header />

      <main>
        <div className="container">

          <Collection />

          <Product />
          
        </div>

        <Newsletter />

        <div className="container">
          <Brands items={brands}/>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;