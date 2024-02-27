
import "./ProductGroup.css"
import Product from "./Product.jsx";

function ProductGroup (){
	

	return (
		<div className="div2">
		<Product name="Ramesh" age= {22}   state="Rajasthan" year= {2002} />
		<Product name="Vimal" age= {44}    state="Haryana"   year= {2005}  />
		<Product name="Suresh" age = {55/2}  state="Tamil Nadu"  year= {2011}   />
		<Product name="Jignesh" age = {30}  state="Gujrat"  year= {2009}   />
		</div>
	)
}

export default ProductGroup 