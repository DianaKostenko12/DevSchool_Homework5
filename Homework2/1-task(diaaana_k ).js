function maxLeaderHonor(arr, d) {
    let maxHonor = -Infinity;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let currentSum = 0;

        for (let j = 0; j < d; j++) {
            currentSum += arr[(i + j * (n / d)) % n];
        }

        if (currentSum > maxHonor) {
            maxHonor = currentSum;
        }
    }

    return maxHonor;
}

console.log(maxLeaderHonor([1, 2, 3, 4], 2));

