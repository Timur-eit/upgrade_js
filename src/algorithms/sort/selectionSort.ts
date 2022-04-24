export {};

const arr1 = [4, 2, 5, 1, 8, 3];
//           0  1  2  3  4  5
const arr2 = [99, 33, 123, 2, 8, 0, 100];
//            0   1    2   3  4  5   6

function getSmallestIndex(arr: number[]): number {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr: number[]) {
    const initialArr = [...arr];
    const resultArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        const smallestIndex = getSmallestIndex(initialArr);
        resultArr.push(initialArr[smallestIndex]);
        initialArr.splice(smallestIndex, 1);
    }
    return resultArr;
}

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));