import "./SingleCard.css"
import Price from "./Price"

function Card ({heading, image , idx}) {

	let head = ['Logitech MX Master 3S' , 'Apple Pencil (2nd Gen)' ,
				 'Zebronics zeb-Transformer' , 'Portonics Toad 23 Wireless Mouse']

	let description = [ ['800 DPi' , '5 Programming Button'] , 
					['Intutive touch surface', 'Designed for iPad Pro'], 
					['Intutive touch surface', 'Designed for iPad Pro'], 
					 ['Wireless Mouse 2.4GHz' , 'Optical Orientation']]
	
	return (
		<div className="singleCard" >
		<h2>{head[idx]}</h2>
		<ul>
			<li> {description[idx][0]} </li>
			<li> {description[idx][1]} </li>
		</ul>
		
		<Price  oldPrice="123"  newPrice="456" /> 
		
		</div>
	)
	
}


export default  Card