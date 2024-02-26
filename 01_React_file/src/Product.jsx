
import "./Product.css"


function Product ({name, age, state, year = `"Not mentioned"` , sequence}) {
	// const numCount = num.map( (n) => <li>{n}</li>)
	return (
		<div className="div1">
		<h1> Hello My Name is {name} </h1>
		<h2> My Age is : {age} </h2>
		<h3> I belongs to the Indian state of  "{state}"</h3>
		<h4> I did my graduation in : {year} </h4>
		<p> My Sequence is : {sequence}</p>
		</div>
	);
}

export {Product} 