

function Card ({heading, image, dualDescrptn , price}) {
	
	let head = ['Logitech MX Master 3S' , 'Apple Pencil (2nd Gen)' ,
				 'Zebronics zeb-Transformer' , 'Portonics Toad 23 Wireless Mouse']

	return (
		<div>
		<h1>{head[index]}</h1>
		<img src= {image} alt="" />
		<ul>
			<li> </li>
			<li> </li>
		</ul>
		
		<h2>{price}</h2>
		</div>
	)
	
}