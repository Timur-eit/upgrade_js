export{};

const arr  = [33, 10, 15, 1, 55, 2]; // base 15
// const arr  = [1000, 900, 800, 100, 500, 200];


function quickSort<T>(
    arr: T[],
    left: number,
    right: number,
    comparator: (a: T, b: T)  => number = (a, b) => String(a).localeCompare(String(b))
): T[] {

    if (arr.length < 2) {
        return arr;
    }

    let baseItem = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    // console.log(arr[i], baseItem);

    while (i <= j) {

        while (arr[i] < baseItem) {
        // while (comparator(arr[i], baseItem) < 0) {
            // console.log(arr[i], baseItem)
            // console.log(comparator(arr[i], baseItem));
            i++;
        }
        
        while (arr[j] > baseItem) {
        // while (comparator(arr[i], baseItem) > 0) {
            console.log(arr[j], baseItem);
            console.log(comparator(arr[i], baseItem));
            j--;
        }

        if (i <= j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    const sepateIndex = i;

    if (left < sepateIndex - 1) {
        quickSort(arr, left, sepateIndex - 1);
    }
    if (right > sepateIndex) {
        quickSort(arr, sepateIndex, right);
    }
    return arr;
}

// quickSort(arr, 0, arr.length - 1);

function comparator(a: number, b: number) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    // a должно быть равным b
    return 0;
}

quickSort(arr, 0, arr.length - 1, comparator);
console.log(arr);

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 0 },
    { name: 'Zeros', value: 37 }
];

function valueComparator(a: { value: number; }, b: { value: number; }) {
    if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      // a должно быть равным b
      return 0;
}

// quickSort(
//     items,
//     0,
//     items.length - 1,
//     // valueComparator
// );

// console.log(items);