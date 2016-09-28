var calc = function(value){
	var sum = 0;
	for (var i = 0; i < value; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum+=i;
		}
	}
	document.getElementById('result1').innerHTML = sum;
}
var fibo = function(value){
	var arr = [1, 2];
	var sum = 2;
	var last = 0;
	while(last < value){
		last = arr[arr.length - 1] + arr[arr.length - 2];
		if (last % 2 === 0) {
			sum+=last;
		}
		arr.push(last);
	}
	document.getElementById("result2").innerHTML = sum;
}