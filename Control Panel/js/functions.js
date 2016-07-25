function init()
{
	var svg = document.getElementById('svg');
	drawCashRegister(svg, 140, 50, 340, 340);
}

function drawCashRegister(svg, x, y, width, height) 
{
	// guide rect
	drawRect(svg, x, y, 340, 340, '#F0F0F0', '2', '2', 'url(#f3)');
	// hamburger menu
	var widthSquereMenu = width * 0.205;
	var heightSquereMenu = height * 0.205;
	drawRect(svg, x, y, widthSquereMenu, heightSquereMenu, '#607D8B', '2', '2', 'url(#f3)');
	// hamburger menu lines
	var widthLine = width * 0.147;
	var heightLine = height * 0.029;
	// hamburger menu first line 
	drawRect(svg, x + 10, y + 10, widthLine, heightLine, '#FFF', '2', '2');
	// hamburger menu second line 
	drawRect(svg, x + 10, y + 30, widthLine, heightLine, '#FFF', '2', '2');
	// hamburger menu third line 
	drawRect(svg, x + 10, y + 50, widthLine, heightLine, '#FFF', '2', '2');

	// cash register
	var d = '';
	d += 'M' + (x + 80) + ' ' + (y + 70) + ' L' + (x + 120) + ' ' + (y + 70);
	d += '\nL' + (x + 120) + ' ' + (y + 30) + ' L' + (x + 190) + ' ' + (y + 30);
	d += '\nL' + (x + 190) + ' ' + (y + 70) + ' L' + (x + 250) + ' ' + (y + 70);
	d += '\nL' + (x + 250) + ' ' + (y + 40) + ' L' + (x + 220) + ' ' + (y + 40);
	d += '\nL' + (x + 220) + ' ' + (y + 0) + ' L' + (x + 310) + ' ' + (y + 0);
	d += '\nL' + (x + 310) + ' ' + (y + 40) + ' L' + (x + 280) + ' ' + (y + 40);
	d += '\nL' + (x + 280) + ' ' + (y + 70) + ' L' + (x + 320) + ' ' + (y + 70);
	d += '\nL' + (x + 320) + ' ' + (y + 190) + ' L' + (x + 340) + ' ' + (y + 210);
	d += '\nL' + (x + 340) + ' ' + (y + 250) + ' L' + (x + 60) + ' ' + (y + 250);
	d += '\nL' + (x + 60) + ' ' + (y + 210) + ' L' + (x + 80) + ' ' + (y + 190) + ' Z';
	console.log(d);
	drawPath(svg, d, '#757575');
	
	// cash register ticket
	drawRect(svg, x + 100, y + 105, width * 0.323, height * 0.117, '#FFF', '2', '2', '', '#2196F3', '5');
	drawRect(svg, x + 125, y + 35, width * 0.176, height * 0.264, '#FFF', '2', '2', '', '#2196F3', '5');
}
/*140, 50
<svg id="svg">
				<!-- cash register ticket -->
				<rect x="240" y="155" width="110" height="40" 
				fill="#FFF" style="stroke:#2196F3; stroke-width:5;"></rect>
				<rect x="265" y="85" width="60" height="90" 
				fill="#FFF" style="stroke:#2196F3; stroke-width:5;"></rect>
				<!-- cash register screen -->
				<rect x="365" y="55" width="80" height="30" 
				fill="#FFF"></rect>
				<rect x="370" y="60" width="70" height="20" 
				fill="#2196F3"></rect>
				<!-- cash register box -->
				<circle cx="340" cy="280" r="15" fill="#FFF" stroke="#2196F3" stroke-width="5"/>
				<!-- cash register board -->
				<!-- cash register screen board -->
				<rect x="370" y="140" width="70" height="20" 
				fill="#FFF" ></rect>
				<!-- cash register tails -->
				<!-- first line -->
				<rect x="370" y="165" width="20" height="20" 
				fill="#FFF" ></rect>
				<rect x="395" y="165" width="20" height="20" 
				fill="#FFF" ></rect>
				<rect x="420" y="165" width="20" height="20" 
				fill="#FFF" ></rect>
				<!-- second line -->
				<rect x="370" y="190" width="20" height="20" 
				fill="#FFF" ></rect>
				<rect x="395" y="190" width="20" height="20" 
				fill="#FFF" ></rect>
				<rect x="420" y="190" width="20" height="20" 
				fill="#FFF" ></rect>
				<!-- third line -->
				<rect x="370" y="215" width="20" height="20" 
				fill="#FFF" ></rect>
				<rect x="395" y="215" width="20" height="20" 
				fill="#FFF" ></rect>
				<rect x="420" y="215" width="20" height="20" 
				fill="#FFF" ></rect>
				
				
				<!-- hamburger shadow -->
				<defs>
					<filter id="f3" x="0" y="0" width="70px" height="70px">
						<feOffset result="offOut" in="SourceAlpha" dx="-1" dy="-1" />
						<feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
						<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
					</filter>
				</defs>
			</svg>*/