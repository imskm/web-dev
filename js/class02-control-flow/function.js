function is_prime(n)
{
	let i = 2;
	
	while (i * i <= n) {
		if (n % i == 0)
			return false;
		++i;
	}

	return true;
}

let ans = is_prime(1000000007);

console.log(ans);
