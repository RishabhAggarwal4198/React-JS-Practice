
import "./ProductGroup.css"
import { Product } from "./Product.jsx";

function ProductGroup (){
	const num = ['Pratham', 'Dwitya', 'Tritya', 'Chaturth']
	let num2 =  { pehla : 'Pratham', dudra : 'Dwitya', teesra : 'Tritya', chautha: 'Chaturtha' }
	// const numCount = num.map( (n) => <li>{n}</li>)

	return (
		<div className="div2">
		<Product name="Ramesh" age= {22}   state="Rajasthan"  sequence = {num}  objTwo = {['Hello', 'World']} />
		{/* <Product name="Ramesh" age= {22}   state="Rajasthan"  sequence = {num}  objTwo = { {'a': 'Hello', 'b': 'World'}} /> */}
		<Product name="Vimal" age= {44}    state="Haryana"  sequence = {num}  />
		<Product name="Suresh" age = {55/2}  state="Tamil Nadu"  sequence = {num}  />
		</div>
	)
}

export default ProductGroup 