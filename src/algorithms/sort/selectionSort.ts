export {};

const arr1 = [4, 2, 5, 1, 8, 3];
//            0  1  2  3  4  5

const arr2 = [99, 33, 123, 2, 8, 0, 100];
//            0    1   2   3  4  5   6
const arr3 = ['Zack', 'John', 'Bob', 'Ann'];

const arr4 = [['Zack'], ['John'], ['Bob'], ['Ann']];
const arr5 = [[6], [1], [9], [2]];


function getSmallestIndex<T = string | number>(arr: T[]): number  {
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

function selectionSort<T>(
    arr: T[],
    comparator: (a: T, b: T)  => number = (a, b) => String(a).localeCompare(String(b))
): T[] {

    for (let k = 0; k < arr.length; k++) {
        let smallestIndex = k;

        for (let i = k + 1; i < arr.length; i++) {
            if (comparator(arr[i], arr[smallestIndex]) < 0) {
                smallestIndex = i;
            }
        }
        const changedItem = arr[k];
        arr[k] = arr[smallestIndex];
        arr[smallestIndex] = changedItem;
    }

    return arr;
}

// console.log(selectionSort(arr1));
// console.log(selectionSort(arr2));
// console.log(selectionSort(arr3));
// console.log(selectionSort(arr4));
// console.log(selectionSort(arr5));

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 0 },
    { name: 'Zeros', value: 37 }
  ];

  selectionSort(items, function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  
  console.log(items);