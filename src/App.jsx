import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartConextProvider from "./store/shopping-cart-context.jsx";

function App() {

  return (
    //value prop here in the CartContext.Provider is used however we set the default value in the context but we set the
    //defult value only for make the developer tools easier not to path the value 
    //the actual value provided from the value prop here.
    <CartConextProvider>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}/>
          </li>
        ))}
      </Shop>
    </CartConextProvider>
  );
}

export default App;
