import "./App.css";
import candleHero from "./images/Candle-Page_Inner_Banner_Desktop_1400x.webp";
import i from "./images/1.jpg"
import j from "./images/2.jpg"
import k from "./images/3.jpg"
import l from "./images/4.jpg"
import m from "./images/5.jpg"
function App() {
  return (
    <div>
      <div className="nav-top">
        <h1>Ziminika</h1>
        <div className="items">
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      </div>
      <div className="nav-bottom">
        <div>Winter Collection</div>
        <div>Summer Collection</div>
        <div className="special">Vivah Collection</div>
        <div>Spring Collection</div>
        <div>Festive Collection</div>
      </div>
      <div className="hero">
        <img src={candleHero} alt="Image" />
      </div>
      <div className="BSellers">
        <h1>Best Sellers</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img
            src="https://www.kimirica.shop/cdn/shop/files/IlluminatingSoyCandleSet_Website_Listing-November-23-01_400x.jpg?v=1700740990"
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src="https://www.kimirica.shop/cdn/shop/files/Candles-Listing-Images-Diwali-Gift-Fest-06_1_400x.jpg?v=1698304186"
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={i}
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={j}
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
      </div>
      <div className="show">
        <div className="box">
          <h1>WHY SOY WAX?</h1>
          <p>
            Soy wax candles are a sustainable and eco-friendly alternative to
            traditional paraffin wax candles. Derived from soybeans, these
            candles burn clean, last longer and provide a better scent throw.
          </p>
        </div>
      </div>
      <div className="BSellers">
        <h1>More Candles</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img
            src="https://www.kimirica.shop/cdn/shop/files/IlluminatingSoyCandleSet_Website_Listing-November-23-01_400x.jpg?v=1700740990"
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src="https://www.kimirica.shop/cdn/shop/files/Candles-Listing-Images-Diwali-Gift-Fest-06_1_400x.jpg?v=1698304186"
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={l} alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={k}
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src="https://www.kimirica.shop/cdn/shop/files/IlluminatingSoyCandleSet_Website_Listing-November-23-01_400x.jpg?v=1700740990"
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src="https://www.kimirica.shop/cdn/shop/files/Candles-Listing-Images-Diwali-Gift-Fest-06_1_400x.jpg?v=1698304186"
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={i}  alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={j}
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={l}
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
        <div className="card">
          <img
            src={m}
            alt=""
          />
          <h4>Candle1</h4>
          <p>$1,000</p>
          <div className="btn">ADD TO CART</div>
        </div>
      </div>
      <footer>
        <h1>
          Thank You for being here. The above website is just made for study
          purpouse.
        </h1>
      </footer>
    </div>
  );
}

export default App;
