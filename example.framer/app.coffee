document.body.style.cursor = "auto"

# Include module
flipCard = require "flipCard"

# Set background layer
newBG = new BackgroundLayer 
	backgroundColor: "#d7d7d7"

backLayer = new Layer 
	x:0, y:0, width:616, height:470, image:"images/back.png"
frontLayer = new Layer 
	x:0, y:0, width:615, height:470, image:"images/front.png"

# flipEffect input: (front, back, perspective )
flipCard.flipEffect(frontLayer, backLayer, 1600)
