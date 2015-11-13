# What does it do?
The function `flipCard.flipCard()` will take in four parameters

1. Front image layer
2. Back image layer
3. Perspective, see [docs for reference](http://framerjs.com/docs/#layer.perspective)
4. Animation curve. e.g `spring(300,20,0)`

![What it does](http://i.imgur.com/GBWvMkm.png)

# Example
[![Flip Card Example](https://cloud.githubusercontent.com/assets/5724081/11135054/6c5bb60a-8a06-11e5-96e8-a6004863847c.gif)](http://share.framerjs.com/5ggio6opb1iw/)

# Instructions

1.Include the module

```javascript
flipCard = require "flipCard"
```

2.Add a `front image layer` + `back image layer` + `the perspective` + `animation curve`

```javascript
flipCard.flipEffect(frontLayer, backLayer, 1600, "spring(300,20,0)")
```

note: 1600 is the perspective number used in the example above. The smaller the number the more perspective you get.
