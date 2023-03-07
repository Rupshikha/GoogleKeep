import Page from "../src/Pages/Page/Index";
import "./App.css";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}

export default App;
