let n = 25, k = 3;
let result = 0;

while(n >= k) { // n이 k 이상이면 계속 k로 나누기
	while(n % k !== 0) {
		n -= 1;
		result += 1;
	}
	// k로 나누기
	n = (n / k);
	result += 1;
}	

while(n > 1) {
	n -= 1;
	result += 1;
}

console.log(result);