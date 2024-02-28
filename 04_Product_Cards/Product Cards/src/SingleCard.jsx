import "./SingleCard.css"
import Price from "./Price"

function Card ({heading, image, descrption , idx}) {
	
	return (
		<div className="singleCard" >
		<h2>{heading}</h2>
		<ul>
			<li> {descrption} </li>
			<li> {descrption} </li>
		</ul>
		
		{/* <Price  oldPrice="123"  newPrice="456" />  */}
		
		</div>
	)
	
}


export default  Card