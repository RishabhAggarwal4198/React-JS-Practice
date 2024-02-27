

 export default  function Card ({heading, image, descrption , price}) {
	
	

	return (
		<div>
		<h1>{heading}</h1>
		<img src= {image} alt="" />
		<ul>
			<li> {descrption} </li>
			<li> {descrption} </li>
		</ul>
		
		<h2>{price}</h2>
		</div>
	)
	
}