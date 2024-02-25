
import "./ProductGroup.css"
import { Product } from "./Product.jsx";

function ProductGroup (){
	// const num = ['Pratham', 'Dwitya', 'Tritya', 'Chaturth']
	return (
		<div className="div2">
		<Product name="Ramesh" age= {22}   state="Rajasthan" />
		<Product name="Vimal" age= {44}    state="Haryana" />
		<Product name="Suresh" age = {55/2}  state="Tamil Nadu"/>
		</div>
	)
}

export default ProductGroup