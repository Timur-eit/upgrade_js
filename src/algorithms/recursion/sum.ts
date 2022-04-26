export {};

const arr = [1, 2, 3, 4, 5];

function sum(arr: number[]): number {
    
    if (!arr.length) {
        return 0;
    }
    
    const initArr = [...arr];
    const actualNumber = initArr[0];
    
    if (initArr.length === 1) {
        return actualNumber;
    } else {
        initArr.splice(0, 1);
        return actualNumber + sum(initArr);
    }
}


console.log(sum(arr));
console.log(sum([5]));
console.log(sum([]));
