import "./App.css"
import { Product } from "./Product.jsx"

import ProductGroup from "./ProductGroup.jsx"


function App() {
  return (
    <div>
      <ProductGroup />
      <Product name="Ganesh" age ={`'44'`}  state="Assam" />
    </div>
  )

}

export default App
