import "./index.css"

import { Home } from "./components/home/landing-page";
import { ProductContextProvider } from "./context/productContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Home />
      </ProductContextProvider>
    </>
  );
}

export default App;
