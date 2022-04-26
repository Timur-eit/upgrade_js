export{};

const arr  = [33, 15, 10, 3, 2, 1];

function quickSort(arr: number[]): number[] {
    if (arr.length < 2 ) {
        return arr;
    } else {
        const baseNumber = arr[0];
        const less = [];
        const greater = [];

        for (const number of arr.slice(1)) {
            if (number > baseNumber) {
                greater.push(number);
            }
            if (number <= baseNumber) {
                less.push(number);
            }
        }
        
        return [...quickSort(less), baseNumber, ...quickSort(greater)];
    }
}

console.log(quickSort(arr));