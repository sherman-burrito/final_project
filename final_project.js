var namespace = "http://www.w3.org/2000/svg"

// Write your code here!
var baseball
var bat
var mlb


baseball = makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Baseball.svg/520px-Baseball.svg.png", 20, 20, 20, 20)
bat = makeImage("http://www.clipartbest.com/cliparts/nTB/ByX/nTBByX7rc.png", 40, 40, 50, 50)

function moveStuff() {
  var x = getX(baseball)
  var x2 = getX(bat)
  move(baseball, -1.5,0)
  move(bat, -1.5,0)
  if(x < -40){
     setX(baseball, 300)
  }if(x2 <-40){
    setX(bat, 300)
  }
  requestAnimationFrame(moveStuff)
}


function One() {
  document.querySelector("body").setAttribute("style", "background: url('https://www.ccuathletics.com/images/2015-16/baseball-pic.jpg')")
  document.getElementById("title").setAttribute("style", "color: black; font-family: 'Wendy One', sans-serif;")
  document.getElementById("point1").setAttribute("style", "color: black; font-family: 'Wendy One', sans-serif;")
  document.getElementById("point2").setAttribute("style", "color: black; font-family: 'Wendy One', sans-serif;")
  document.getElementById("point3").setAttribute("style", "color: black; font-family: 'Wendy One', sans-serif;")
  makeImage("http://www.allstaractivities.com/sports/baseball/_derived/baseball-positions.htm_txt_BASEBALL%20FIELD.gif", 1, -45, 200, 200)
  mlb = makeImage("http://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fmlb.png", 160, 75, 40, 40)

}

function Two() {
  document.querySelector("body").setAttribute("style", "background: url('http://wallpaper.zone/img/4114009.jpg')")
  document.getElementById("title").setAttribute("style", "color: Navy; font-family: Bungee Inline")
  document.getElementById("point1").setAttribute("style", "color: Navy; font-family: Bungee Inline")
  document.getElementById("point2").setAttribute("style", "color: Navy; font-family: Bungee Inline")
  document.getElementById("point3").setAttribute("style", "color: Navy;font-family: Bungee Inline")
  makeRect(1, 1, 1000, 1000, "white")
  makeImage("https://www.seegoodthings.com/wp-content/uploads/2017/04/Best-Baseball-Batting-Gloves-Reviews.jpg", 0, 0, 100, 100)
}
function Three(){
  document.querySelector("body").setAttribute("style", "background: url('https://i.ytimg.com/vi/TUUPIpuWDoo/maxresdefault.jpg')")
    document.getElementById("title").setAttribute("style", "color: midnightblue; font-family: 'Exo 2', sans-serif;")
  document.getElementById("point1").setAttribute("style", "color: midnightblue; font-family: 'Exo 2', sans-serif;")
  document.getElementById("point2").setAttribute("style", "color: midnightblue; font-family: 'Exo 2', sans-serif;")
  document.getElementById("point3").setAttribute("style", "color: midnightblue; font-family: 'Exo 2', sans-serif;")


  makeRect(1, 1, 1000, 1000, "white")
  makeText("Major League Baseball teams.",10,10,10)
  makeText("-LA Dodgers -LA Angels -Chicago Cubs",10,20,10)
  makeText("-NY Yankees -Cleveland Indians",10,30,10)
  makeText("-Detroit Tigers -Texas Rangers -NY Mets",10,40,10)
  makeText("-Toronto Blue Jays -Boston Red Sox",10,50,10)
  makeText("-St. Louis Cardinals -San Francisco Giants",10,60,10)
  makeText("-Atlanta Braves -Baltimore Orioles",10,70,10)
  makeText("-Pittsburgh Pirates -Houston Astros",10,80,10)
  makeText("-Philadelphia Phillies -Kansas City Royals",10,90,10)
  makeText("-Washington Nationals -Minnesota Twins",10,100,10)
  makeText("-Seattle Mariners -Cincinnati Reds",10,110,10)
  makeText("-Seattle Mariners -Cincinnati Reds",10,110,10)



}


// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
