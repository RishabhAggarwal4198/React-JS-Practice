
import "./ProductGroup.css"
import { Product } from "./Product.jsx";

function ProductGroup (){
	// const nums = ['Pratham', 'Dwitya', 'Tritya', 'Chaturth']
	let num2 =  { pehla : 'Pratham', dudra : 'Dwitya', teesra : 'Tritya', chautha: 'Chaturtha' }
	let options = ["Hi-tech", "durable", "fast"];

	return (
		<div className="div2">
		<Product name="Ramesh" age= {22}   state="Rajasthan"  sequence = {nums}  objTwo = {['Hello', 'World']} />
		{/* <Product name="Ramesh" age= {22}   state="Rajasthan"  sequence = {num}  objTwo = { {'a': 'Hello', 'b': 'World'}} /> */}
		<Product name="Vimal" age= {44}    state="Haryana"  sequence = {nums}  />
		<Product name="Suresh" age = {55/2}  state="Tamil Nadu"  sequence = {nums}  />
		</div>
	)
}

export default ProductGroup 