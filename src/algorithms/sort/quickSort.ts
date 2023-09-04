function quickSort<T>(
  arr: T[],
  left: number,
  right: number,
  comparator: (a: T, b: T) => number = (a, b) =>
    String(a).localeCompare(String(b))
): T[] {
  if (arr.length < 2) {
    return arr;
  }

  let baseItem = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (comparator(arr[i], baseItem) < 0) {
      i++;
    }
    while (comparator(arr[j], baseItem) > 0) {
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

  if (left < i - 1) {
    quickSort(arr, left, i - 1, comparator);
  }
  if (right > i) {
    quickSort(arr, i, right, comparator);
  }
  return arr;
}

export default quickSort;
