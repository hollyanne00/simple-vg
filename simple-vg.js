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

function line(start, end){

	this.x1 = start.x;
	this.y1 = start.y;
	this.x2 = end.x;
	this.y2 = end.y;

	this.strokeColor = strokeColor;
	this.strokeWidth = strokeWidth;

	this.obj = document.createElementNS(svgns, 'path');
	var path = 'M ' + this.x1 + ' ' + this.y1 + ' L ' + this.x2 + ' ' + this.y2;
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
	return this;
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