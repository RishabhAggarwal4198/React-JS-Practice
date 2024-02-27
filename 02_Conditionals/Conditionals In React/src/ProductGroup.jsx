
import "./ProductGroup.css"
import Product from "./Product.jsx";

function ProductGroup (){

	return (
		<div className="div2">
		<Product name="Ramesh" age= {22}   state="Rajasthan" year= {2020} />
		<Product name="VimalRaj" age= {44}    state="Haryana"   year= {1986}  />
		<Product name="Suresh" age = {55}  state="Tamil Nadu"  year= {1980}   />
		<Product name="Jignesh" age = {30}  state="Gujrat"  year= {2009}   />
		</div>
	)
}

export default ProductGroup 