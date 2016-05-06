document.body.style.cursor = "auto"

# Include module
flipCard = require "flipCard"

# Set the screen background colour
Screen.backgroundColor = "#D7D7D7"

backLayer = new Layer 
	x:0, y:0, width:616, height:470, image:"images/back.png"
frontLayer = new Layer 
	x:0, y:0, width:615, height:470, image:"images/front.png"

# flipEffect input: (front, back, perspective, animation curve )
flipCard.flipCard(frontLayer, backLayer, 3200, "spring(300,20,0)")
