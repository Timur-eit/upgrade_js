export{};

const arr  = [33, 10, 15, 1, 55, 2]; // base 15
// const arr  = [1000, 900, 800, 100, 500, 200];


function quickSort<T>(
    arr: T[],
    left: number,
    right: number,
    // comparator: (a: T, b: T)  => number = (a, b) => String(a).localeCompare(String(b))
    comparator: (a: T, b: T)  => number,
): T[] {

    if (arr.length < 2) {
        return arr;
    }

    let baseItem = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        // while (comparator(arr[i], baseItem) < 0) {
        while (arr[i] < baseItem) {

            // console.log('LEFT', arr[i], baseItem, 'comparator:', comparator(arr[i], baseItem));
            if (comparator(arr[i], baseItem) < 0) {
                i++;
            }
        }
        
        while (arr[j] > baseItem) {
        // while (comparator(arr[i], baseItem) >= 0) {
        // while (comparator(arr[i], baseItem) > 0) {
            // console.log(arr[j], baseItem);
            // console.log(arr[j] > baseItem);
            // console.log('comparator', comparator(arr[i], baseItem));
            // console.log('RIGHT', arr[i], baseItem, 'comparator:', comparator(arr[i], baseItem));

            if (comparator(arr[i], baseItem) >= 0) {
                j--;
            }
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

        quickSort(arr, left, sepateIndex - 1, comparator);
    }
    if (right > sepateIndex) {
        quickSort(arr, sepateIndex, right, comparator);
    }
    return arr;
}

// quickSort(arr, 0, arr.length - 1);

quickSort(arr, 0, arr.length - 1, function(a: number, b: number) {
    
    console.log('a', a);
    console.log('b', b);
    
    
    if (a > b) {
        return 1;
    }
    if (a < b) {
      return -1;
    }
    // a должно быть равным b
    return 0;
});
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