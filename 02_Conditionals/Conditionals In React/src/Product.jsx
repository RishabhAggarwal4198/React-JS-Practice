
import "./Product.css"


function Product ({name, age, state, year = `"Not mentioned"`}) {

	let filter = age > 30 ? "You are ELIGIBLE " : "You are NOT-ELIGIBLE "

	return (
		<div className="div1">
		<h1> Hello My Name is {name} </h1>
		<h2> My Age is : {age} </h2>
		<h3> I belongs to the Indian state of  "{state}"</h3>
		<h4> I did my graduation in year : {year} </h4>
		<h4> Eligibility : {filter} </h4>

					{/* OR 🔽🔽 */}

		

		</div>
	);
}





export default Product