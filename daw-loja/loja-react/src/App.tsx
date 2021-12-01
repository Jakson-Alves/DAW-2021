import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Brands } from "./components/Brand";
import { Newsletter } from "./components/NewsLetter";
import { Products } from "./components/Product";
import { useEffect, useState } from 'react';
import { Product } from './@types';
import axios from 'axios';


function App() {
  const brands = [
    {alt: 'brand1', source: 'assets/images/brand1.png'},
    {alt: 'brand2', source: 'assets/images/brand2.png'},
    {alt: 'brand3', source: 'assets/images/brand3.png'},
    {alt: 'brand4', source: 'assets/images/brand4.png'},
    {alt: 'brand5', source: 'assets/images/brand5.png'}
  ];

  // const testaProduct = [
  //   {id: 1, name: 'Conjunto de casaco e calça preta', description: '', price: 300, likes: 2, photo: 'produtc1.jpg' }
  // ];

  const [products, setProducts] = useState<Product[]>([] as Product[]);
  
  useEffect(() => {
    axios.get('http://localhost:3333/products')
    .then(result => {
      setProducts(result.data)
    })
    .catch(error =>{
      console.log(error);
    })
  }, [])
  
  return (
    <div>

      <Header />

      <main>
        <div className="container">

          <Collection />

          <Products items={products}/>
          
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