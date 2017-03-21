function fibFunction(n) {
    var seq;
    var div = document.createElement('div');
    div.setAttribute("class", "x");
    if (n < 2) {
		switch (n) {
			case 0:
				seq = 0;
				break;
			case 1:
				seq = 1;
				break;
		}
        var p = document.createElement('p');
        p.textContent = 'Fibonacci(' + n + ') = ' + seq;
        div.appendChild(p)
    } else {
        var left = fibFunction(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " x-left");
        var right = fibFunction(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " x-right");
        seq = left.seq + right.seq;
        var p = document.createElement('p');
        p.textContent = 'Fibonacci(' + n + ') = ' + seq;
        div.appendChild(p);
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'seq': seq, 'html': div };
}

function pellFunction(n) {
    var seq;
    var div = document.createElement('div');
    div.setAttribute("class", "x");
    if(n < 2) {
		switch (n) {
			case 0:
				seq = 0;
				break;
			case 1:
				seq = 1;
				break;
		}
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + seq;
        div.appendChild(p)
    } else {
        var left = pellFunction(n - 1);
        var temp = left.html.getAttribute("class");
        left.html.setAttribute("class", temp + " x-left");
        var right = pellFunction(n - 2);
        temp = right.html.getAttribute("class");
        right.html.setAttribute("class", temp + " x-right");
        seq = (2 * left.seq) + right.seq;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + seq;
        div.appendChild(p);
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'seq': seq, 'html': div };
}

function tribFunction(n) {
    var seq;
    var div = document.createElement('div');
    div.setAttribute("class", "x");
    if (n < 3) {
		switch (n) {
			case 0:
			case 1:
				seq = 0;
				break;
			case 2:
				seq = 1;
				break;
		}
        var p = document.createElement('p');
        p.textContent = 'Tribonacci(' + n + ') = ' + seq;
        div.appendChild(p)
    } else {
        var left = tribFunction(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " x-left");
        var mid = tribFunction(n - 2);
        clas = mid.html.getAttribute("class");
        mid.html.setAttribute("class", clas + " x-mid");
        var right = tribFunction(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " x-right");
        seq = left.seq + mid.seq + right.seq;
        var p = document.createElement('p');
        p.textContent = 'Tribonacci(' + n + ') = ' + seq;
        div.appendChild(p);
        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    return { 'seq': seq, 'html': div };
}

var fib = function (n, node) {
	var wut = node.querySelector('div.fib');
	if (wut) {
		node.removeChild(wut);
	}
	var context = fibFunction(n);
	node.appendChild(tree.html);
}
var pell = function (n, node){
	var wut = node.querySelector('div.pell');
	if (wut) {
		node.removeChild(wut);
	}
    var context = pellFunction(n)
    node.appendChild(context.html);
}
var trib = function (n, node){
	var wut = node.querySelector('div.trib');
	if (wut) {
		node.removeChild(wut);
	}
    var context = tribFunction(n)
    node.appendChild(context.html);
}

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	fib(value, form.parentNode);
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}
var pellButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	pell(value, form.parentNode);
}

var pellSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Pell(' + me.value + ')';
}
var tribButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	trib(value, form.parentNode);
}

var tribSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Trib(' + me.value + ')';
}
