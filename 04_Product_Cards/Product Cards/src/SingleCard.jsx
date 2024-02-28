import "./SingleCard.css"
import Price from "./Price"

function Card ({ idx}) {

	let head = ['Logitech MX Master 3S' , 'Apple Pencil (2nd Gen)' ,
				 'Zebronics Transformer' , 'Portonics Wireless Mouse']

	let description = [ ['800 DPi' , '5 Programming Button'] , 
					['Intutive touch surface', 'Designed for iPad Pro'], 
					['Intutive touch surface', 'Designed for iPad Pro'], 
					 ['Wireless Mouse 2.4GHz' , 'Optical Orientation']]
	
	let picture = ["/React/Images/png_computer_mouse_71912.png"]

	let oldPr = ["12,495 ", "11,900", "1,599", "599"]
	let newMulya = ["8,999", "9,199", "899", "278"]

	return (
		<div className="singleCard" >
		<h2>{head[idx]}</h2>
		<img src={picture[idx]} alt="Mouse" />

		<div>
		<ul>
			<li> {description[idx][0]} </li>
			<li> {description[idx][1]} </li>
		</ul>
		
		<Price  oldPrice={oldPr[idx]}   newPrice={newMulya[idx]} /> 

		</div>
		
		
		</div>
	)
	
}


export default  Card