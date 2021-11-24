import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Brands } from "./components/Brand";
import { Newsletter } from "./components/NewsLetter";


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

          <div className="products">
            <div className="card">
              <img src="assets/images/product1.jpg" />
              <div className="card-body">
                <h5>Conjunto de casaco e calça preta</h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="price">
                    <h3>R$600,00</h3>
                    <p>10 x R$ 60,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="assets/images/product2.jpg" />
              <div className="card-body">
                <h5>Conjunto de casaco e calça preta</h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="price">
                    <h3>R$600,00</h3>
                    <p>10 x R$ 60,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="assets/images/product3.jpg" />
              <div className="card-body">
                <h5>Conjunto de casaco e calça preta</h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="price">
                    <h3>R$600,00</h3>
                    <p>10 x R$ 60,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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