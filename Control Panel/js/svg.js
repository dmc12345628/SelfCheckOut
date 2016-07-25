//draw rect
function drawRect(parent, x, y, width, height, fill, rx, ry, filter, stroke, stroke_width)
{
	var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	r.setAttribute('x', x);
	r.setAttribute('y', y);
	r.setAttribute('width', width);
	r.setAttribute('height', height);
	r.setAttribute('fill', fill);
	if (rx != null) r.setAttribute('rx', rx);
	if (ry != null) r.setAttribute('ry', ry);
	if (filter != null) r.setAttribute('filter', filter);
	if (stroke != null) r.setAttribute('stroke', stroke);
	console.log(stroke);
	if (stroke_width != null) r.setAttribute('stroke-width', stroke_width);
	parent.appendChild(r);
}

//draw path
function drawPath(parent, d, fill)
{
	var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	p.setAttribute('d', d);
	p.setAttribute('fill', fill);
	parent.appendChild(p);
}