
import Price from "./Price"

function Card ({heading, image, descrption , price}) {
	
	return (
		<div>
		<h1>{heading}</h1>
		<img src= {image} alt="" />
		<ul>
			<li> {descrption} </li>
			<li> {descrption} </li>
		</ul>
		
		<Price  oldPrice="123"  newPrice="456" /> 
		
		</div>
	)
	
}


export default  Card