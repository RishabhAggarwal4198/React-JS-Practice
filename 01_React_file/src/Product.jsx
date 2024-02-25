
import "./Product.css"


function Product ({name,age, state}) {
	return (
		<div>
		<h1> Hello My Name is {name} </h1>
		<h2>  My Age is {age} </h2>
		<h3> i belongs to the Indian state of  "{state}"</h3>
		</div>
	);
}

export {Product} 