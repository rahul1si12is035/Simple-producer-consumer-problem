let arr = [], i = 0, j = 0, flag = 1, x;
let item = document.querySelector(".content-produce-item");
let buff = document.querySelectorAll(".box-1");

//FIND RANDOM ELEMENT and APPEND INTO PRODUCE
getRandom = () => {
	x = Math.floor(Math.random() * 10);
	console.log(x);
	if(i<10) {
		arr.forEach(function(n){
			if(n === x) {
				flag = 0;
			}
		});
		if(flag != 0) {
			arr.push(x);
			i++;
			var node = document.createElement("div");
		    var textnode = document.createTextNode(x);
		    node.appendChild(textnode);
		    item.appendChild(node);
			buffer();
		}
	}
	flag = 1;
}

//CONSUME FUNCTION
consumeItem = () => {
	if(i>0) {
		item.removeChild(item.children[0]);
		var node = document.createElement("div");
		var textnode = document.createTextNode(arr[j]);
		node.appendChild(textnode);
		document.querySelector(".content-consume-item").appendChild(node);
		i--;
		arr.splice(0, 1);
		buffer();
	}
}

//BUFFER FUNCTION
buffer = () => {
	var k = arr.length - 1;
	buff.forEach(function(buffNext) {
		buffNext.textContent = arr[k];
		k--;
	});
}
