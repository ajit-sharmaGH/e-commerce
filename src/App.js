import "./index.css"

import { Home } from "./components/home/landing-page";
import { ProductContextProvider } from "./context/productContext";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Navbar/>
        <Home />
      </ProductContextProvider>
    </>
  );
}

export default App;
