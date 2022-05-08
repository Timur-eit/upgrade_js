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

    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;

        for (let k = i + 1; k < arr.length; k++) {
            if (comparator(arr[k], arr[smallestIndex]) < 0) {
                smallestIndex = k;
            }
        }
        const changedItem = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = changedItem;
    }

    return arr;
}

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

function numberComparator(a: number, b: number): number {
  if (a > b) {
      return 1
  }
  if (a < b) {
      return -1;
  }
  return 0;
}
  
selectionSort(arr1, numberComparator);
console.log('arr1:', arr1);
selectionSort(arr2, numberComparator);
console.log('arr2:', arr2);

function letterArrComparator(arr1: string[], arr2: string[]) {
    return arr2[0].localeCompare(arr1[0]); // DESC
}

selectionSort(arr4, letterArrComparator);
console.log('arr4:', arr4, '// DESC');

selectionSort(arr3);
console.log('arr3:', arr3);

selectionSort(arr5);
console.log('arr5:', arr5);