function fibFunction(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	n = parseInt(n);

	if (n < 2) {
		if (n === 0) {
			value = 0;
		} else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} else {
		var left = fibFunction(n - 1);
		var clas = left.html.getAttribute('class');
		left.html.setAttribute('class', clas + ' fib-left');

		var right = fibFunction(n - 2);
		clas = right.html.getAttribute('class');
		right.html.setAttribute('class', clas + ' fib-right');

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}

	return { 'value': value, 'html': div };
}

function pellFunction(n) {
    var seq;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");
	
	n = parseInt(n);
	
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
        left.html.setAttribute("class", temp + " fib-left");
        var right = pellFunction(n - 2);
        temp = right.html.getAttribute("class");
        right.html.setAttribute("class", temp + " fib-right");
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
    div.setAttribute("class", "fib");
	
	n = parseInt(n);
	
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
        left.html.setAttribute("class", clas + " fib-left");
        var mid = tribFunction(n - 2);
        clas = mid.html.getAttribute("class");
        mid.html.setAttribute("class", clas + " fib-mid");
        var right = tribFunction(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");
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
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}

	var tree = fibFunction(n);
	node.appendChild(tree.html);
}

var pell = function (n, node) {
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}

	var tree = pellFunction(n);
	node.appendChild(tree.html);
}

var trib = function (n, node) {
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}

	var tree = tribFunction(n);
	node.appendChild(tree.html);
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
