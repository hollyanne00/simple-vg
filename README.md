simple-vg
===========
A javascript library for building SVG images


### Creating the SVG

> var mySVG = new svg(width, height, container element)

### Adding elements

> mySVG.add(myShape);
>
> mySVG.add(new circle(10, 10, 5))

### Creating shapes

#### Circle

> var myCircle = new circle(x position, y position, radius)
>
> var smallCornerCircle = new circl(0, 0, 5);

#### Ellipse

> var myEllipse = new ellipse(x position, y position, x radius, y radius)
>
> var tallEllipse = new ellipse(100, 100, 10, 50)

#### Rectangle

> var myRectangle = new rect(x position, y position, width, height)
>
> var square = new rect(0, 0, 100, 100)

#### Triangle

#### TODO

### Drawing paths

#### Point

> var myPoint = new point(x position, y position)
>
> var start = new point(0, 0)
>
> var end = new point(100, 100)

#### Line

> var myLine = new line(start point, end point)
>
> var diagonal = new line(new point(0, 0), new point(200, 200))

#### Path

> var myPath = new path(start, end)
>
> myPath.joinTo(next point)
>
> var customShape = myPath.closePath();

### Styling

#### Fills

> myCircle.fillColor('black')
>
> myClosedPath.fillColor('#FFFF00')

#### Strokes

> myLine.strokeWidth(4)
>
> mySquare.strokeColor('blue')

#### Rounded corners

> myRectangle.roundCorners(corner radius)
>
> slightlyRoundedRect.roundCorners(4)

### Chaining

> var myCircle = new circle(0, 0, 10)
>
> myCircle.fillColor('red').strokeColor('blue').strokeWidth(1)
>
> var firstPoint = new point(100, 100)
>
> firstPoint.joinTo(100, 200).joinTo(200, 200).joinTo(200, 100).closePath().fillColor(black)
