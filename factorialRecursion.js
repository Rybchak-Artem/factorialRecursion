function factorial(n) {
    if (n < 0) return `U can't factorial negative numbers` 
    if (n === 0) return 1 
    return n * factorial(n - 1) 
}

console.log(`factorial(9) ===`, factorial(9))
