//IMAGES - Product
import imgProduct1 from "../../assets/images/product1.jpg";
import imgProduct2 from "../../assets/images/product2.jpg";
import imgProduct3 from "../../assets/images/product3.jpg";
import imgProduct4 from "../../assets/images/product4.jpg";
import imgProduct5 from "../../assets/images/product5.jpg";
import imgProduct6 from "../../assets/images/product6.jpg";

import './style.css'

export function Product() {
    return (
        <div className="products">
            <div className="card">
                <img src= {imgProduct1} />
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
                <img src={imgProduct2}/>
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
                <img src={imgProduct3} />
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
    )
}