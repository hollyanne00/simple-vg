var svgns = 'http://www.w3.org/2000/svg';

function svg(width, height, container){

	var contents = new Array();

	this.container = container;

	this.width = width;
	this.height = height;
	this.scale = 10;

	this.setBackground = setBackground;
	this.add = add;

	this.canvas = document.createElementNS(svgns, 'svg');

	this.canvas.setAttribute('width', this.width+'px');
	this.canvas.setAttribute('height', this.height+'px');

	container.appendChild(this.canvas);

	return this;

	// functions
	function setBackground(color){
		this.canvas.setAttribute('style', 'background-color: ' + color);
	}
	function fitToContainer(fit){

	}

	// objects
	function add(element){
		this.canvas.appendChild(element.obj);
		return this;
	}
}

function circle(x, y, radius){

	this.x = x;
	this.y = y;
	this.radius = radius;

	this.fillColor = fillColor;
	this.strokeColor = strokeColor;
	this.strokeWidth = strokeWidth;

	this.obj = document.createElementNS(svgns, 'circle');
	this.obj.setAttribute('cx', (x+radius));
	this.obj.setAttribute('cy', (y+radius));
	this.obj.setAttribute('r', radius);

	return this;

	function fillColor(color){
		this.obj.setAttribute('fill', color);
		return this;
	}


	function strokeColor(color){
		this.obj.setAttribute('stroke', color);
		return this;
	}

	function strokeWidth(width){
		this.obj.setAttribute('stroke-width', width);
		return this;
	}
}

function ellipse(x, y, xr, yr){

	this.x = x;
	this.y = y;
	this.xr = xr;
	this.yr = yr;

	this.fillColor = fillColor;
	this.strokeColor = strokeColor;
	this.strokeWidth = strokeWidth;

	this.obj = document.createElementNS(svgns, 'ellipse');
	this.obj.setAttribute('cx', (x+xr));
	this.obj.setAttribute('cy', (y+yr));
	this.obj.setAttribute('rx', xr);
	this.obj.setAttribute('ry', yr);

	return this;

	function fillColor(color){
		this.obj.setAttribute('fill', color);
		return this;
	}


	function strokeColor(color){
		this.obj.setAttribute('stroke', color);
		return this;
	}

	function strokeWidth(width){
		this.obj.setAttribute('stroke-width', width);
		return this;
	}
}

function path(p1, p2){

	this.points = new Array();
	this.i = 0;

	this.buildPath = buildPath;
	this.closePath = closePath;
	this.fillColor = fillColor;
	this.joinTo = joinTo;
	this.strokeColor = strokeColor;
	this.strokeWidth = strokeWidth;

	this.points[this.i] = p1; this.i++;
	this.points[this.i] = p2; this.i++;

	this.obj = document.createElementNS(svgns, 'path');
	this.buildPath();

	return this;

	function buildPath(){
		var path = 'M ' + this.points[0].x + ' ' + this.points[0].y + ' ';
		for(var j=1;j<this.i;j++){
			path += 'L ' + this.points[j].x + ' ' + this.points[j].y + ' ';
		}
		this.obj.setAttribute('d', path);
	}

	function closePath(){
		var path = this.obj.getAttribute('d');
		path += ' z';
		this.obj.setAttribute('d', path);
	}

	function fillColor(color){
		this.obj.setAttribute('fill', color);
		return this;
	}

	function joinTo(point){
		this.points[this.i] = point; this.i++;
		this.buildPath();
		return this;
	}

	function strokeColor(color){
		this.obj.setAttribute('stroke', color);
		return this;
	}

	function strokeWidth(width){
		this.obj.setAttribute('stroke-width', width);
		return this;
	}

}

function line(start, end){

	this.p1 = start;
	this.p2 = end;

	this.strokeColor = strokeColor;
	this.strokeWidth = strokeWidth;

	this.obj = document.createElementNS(svgns, 'path');
	var path = 'M ' + this.p1.x + ' ' + this.p1.y + ' L ' + this.p2.x + ' ' + this.p2.y;
	this.obj.setAttribute('d', path);

	return this;

	function strokeColor(color){
		this.obj.setAttribute('stroke', color);
		return this;
	}

	function strokeWidth(width){
		this.obj.setAttribute('stroke-width', width);
		return this;
	}

}

function point(x, y){

	this.x = x;
	this.y = y;

	this.joinTo = joinTo;

	return this;

	function joinTo(point){
		return new path(this, point);
	}

}

function rect(x, y, width, height){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.fillColor = fillColor;
	this.roundCorners = roundCorners;
	this.strokeColor = strokeColor;
	this.strokeWidth = strokeWidth;

	this.obj = document.createElementNS(svgns, 'rect');
	this.obj.setAttribute('x', x);
	this.obj.setAttribute('y', y);
	this.obj.setAttribute('width', width);
	this.obj.setAttribute('height', height);

	return this;

	function fillColor(color){
		this.obj.setAttribute('fill', color);
		return this;
	}

	function roundCorners(cornerRadius){
		this.obj.setAttribute('rx', cornerRadius);
		this.obj.setAttribute('ry', cornerRadius);
		return this;
	}

	function strokeColor(color){
		this.obj.setAttribute('stroke', color);
		return this;
	}

	function strokeWidth(width){
		this.obj.setAttribute('stroke-width', width);
		return this;
	}

}

function text(x, y, string){

	this.x = x;
	this.y = y;
	this.text = string;

	this.fontColor = fontColor;
	this.fontSize = fontSize;
	this.fontFamily = fontFamily;

	this.obj = document.createElementNS(svgns, 'text');
	this.obj.setAttribute('x', x);
	this.obj.setAttribute('y', y);
	this.obj.textContent = this.text;

	return this;

	function fontColor(color){
		this.obj.setAttribute('fill', color);
		return this;
	}

	function fontSize(size){
		this.obj.setAttribute('font-size', size);
		return this;
	}

	function fontFamily(family){
		this.obj.setAttribute('font-family', family);
		return this;
	}
}