type ListNode<T> = {
  value: T;
  index: number;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;
}
export interface List<T> extends Iterable<T> {
    push(value: T): void;
    unshift(value: T): void;
    map<K>(cb: (value: T) => K): List<K>;
    find(cb: (value: T) => boolean): T | undefined;
    /*
    // reduce
    // reduceRight
    // filter
    // every
    // some
    // includes
    reverse
    sort
    // pop
    // unshift
    // indexOf
    foreach
    // slice
    splice
    */
    filter(cb: (value: T) => boolean): List<T>;
    every(cb: (value: T) => boolean): boolean;
    some(cb: (value: T) => boolean): boolean;
    includes(value: T): boolean;
    pop(): T | undefined;
    indexOf(value: T): number;
    reduce<S>(cb: (previousValue: S, currentValue: T, index: number, list: this) => S, initialValue?: S): S;
    reduce(cb: (previousValue: T, currentValue: T, index: number, list: this) => T): T;

    reduceRight<S>(cb: (previousValue: S, currentValue: T, index: number, list: this) => S, initialValue?: S): S;
    reduceRight(cb: (previousValue: T, currentValue: T, index: number, list: this) => T): T;


    sort(fn: (a: T, b: T) => number): this;
    slice(begin?: number, end?: number): List<T>;

    selectSort(comparator: (a: T, b: T) => number): List<T>;
    quickSort(comparator: (a: T, b: T) => number): List<T>;

    // foreach(cb: (value: T) => void): void;
}

export class LinkedList<T> implements List<T> {
    #head: ListNode<T> | null = null;
    #tail: ListNode<T> | null = null;
    public length: number = 0;

    //     head         tail
    //        ↓         ↓
    // null ← 1 ←→ 2 ←→ 3 ←→ null

    //     head              tail
    //        ↓              ↓
    // null ← 1 ←→ 2 ←→ 3 ←→ 4 ←→ null

    [Symbol.iterator]() {
        let tmp = this.#head;
        const iter: Iterator<T> = {
          next() {
            if (tmp === null) {
              return {
                done: true,
                value: undefined,
              };
            }
            const { value, next } = tmp;
            tmp = next;
            return {
              done: false,
              value: value,
            };
          }
        }
        return iter;
    }

    showIndex() { // just for testing
      const indexColl = [];
      for (let current = this.#head; current !== null; current = current.next) {
        indexColl.push(current.index);
      }
      return indexColl;
    }


    sort(fn: (a: T, b: T) => number = (a, b) => String(a).localeCompare(String(b))): this {
        // merge sort      O(n×log₂n)
        // selection sort  O(n²)
        return this;
    };

    selectSort(comparator: (a: T, b: T) => number = (a, b) => String(a).localeCompare(String(b))): this {

      if (this.length < 2) {
        return this;
      }

      for (let current = this.#head, index = 0; current !== null; current = current.next, index++) {

        let smallestItem = current;
        let smallestValue = current.value;

        for (let nextCurrent = current.next; nextCurrent !== null; nextCurrent = nextCurrent.next) {
            if (comparator(nextCurrent.value, smallestValue) < 0) {
                smallestItem = nextCurrent;
                smallestValue = nextCurrent.value;
            }
        }
        const changedValue = current.value;
        current.value = smallestValue;
        smallestItem.value = changedValue;
      }

      return this;
    }

    quickSort(
      left: number,
      right; number,
      comparator: (a: T, b: T) => number = (a, b) => String(a).localeCompare(String(b))
    ): this {
      if (this.length < 0) {
        return this;
      }

     let baseItemIndex = Math.floor((left + right) / 2)]
    // как сортировать списки ? без обращения по индексу
      
      return this;
    }


    public push(value: T): void {
        
      const index = this.#tail ? this.#tail.index + 1 : 0;
      
      const newNode: ListNode<T> = {
            value: value,
            prev: this.#tail,
            next: null,
            index: index,
        };

        if (!this.#head || !this.#tail) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.length += 1;
    }

    public unshift(value: T): void {
      
      const newNode: ListNode<T> = {
            value: value,
            prev: null,
            next: this.#head,
            index: 0,
        };

        if (!this.#head || !this.#tail) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        for (let current = this.#head.next, i = 1; current !== null; current = current.next, i++) {
          current.index = i;
        }
        this.length += 1;
    }

    public map<K>(cb: (value: T) => K): List<K> {
        const result = new LinkedList<K>();
        let current = this.#head;
        while(current) {
            const newValue = cb(current.value);
            result.push(newValue);
            current = current.next;
        }
        return result;
    }

    public find(cb: (value: T) => boolean): T | undefined {
        let result: T | undefined = undefined;
        let current = this.#head;
        while(current) {
            if (cb(current.value)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }

    public filter(cb: (value: T) => boolean): List<T> {
        const result = new LinkedList<T>();
        let current = this.#head;
        while(current) {
            if (cb(current.value)) {
                result.push(current.value);
            }
            current = current.next;
        }
        return result;
    }

    public every(cb: (value: T) => boolean): boolean {
        return this.reduce<boolean>((prev, curr) => prev && cb(curr), true);
    }

    // f = foldl (\x y -> 2*x + y) 4
    // f [1,2,3]
    // f [1,2,5]
    // [1,2,3].reduce((x, y) => 2*x + y, 4)

    // ["1","2","3"].join(" ")
    // " ".join(["1", "2", "3"])

    //             js                                java

    // const arr = new Int32Array(10);      int[] arr = new int[10];

    // const list = [];                     List<Integer> = new ArrayList<Integer>();

    // intercalate " " ["is","there","such","a","function","?"]

    // 43

    public some(cb: (value: T) => boolean): boolean {
        let current = this.#head;
        while(current) {
            if (cb(current.value)) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public includes(value: T): boolean {
        let current = this.#head;
        while(current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    };

    public pop(): T | undefined {
        if (this.#tail === null) {
            return; // underfined
        }
        this.length -= 1;

        const { value } = this.#tail;

        if (this.#tail.prev === null) {
            this.#head = null;
            this.#tail = null;

            return value;
        }

        this.#tail = this.#tail.prev;
        this.#tail.next = null;

        return value;
    }

    public indexOf(value: T): number {
        let index = 0;
        for (let current = this.#head; current !== null; current = current.next) {
            if (value === current.value) {
                return index;
            }
            index += 1;
        }
        return -1;
    }


    public reduce<S>(cb: (previousValue: S, currentValue: T, index: number, list: this) => S, initialValue: S): S;
    public reduce(cb: (previousValue: T, currentValue: T, index: number, list: this) => T): T;
    public reduce<S, X extends S | T>(cb: (previousValue: X, currentValue: T, index: number, list: this) => X, initialValue?: S) {

        if (initialValue !== undefined) {
            let acc = initialValue as X;
            for (let current = this.#head, index = 0; current !== null; current = current.next, index++) {
                acc = cb(acc, current.value, index, this);
            }
            return acc;
        }
        if (this.#head === null) {
            throw new TypeError('Reduce of empty list with no initial value');
        }

        let acc = this.#head.value as X;
        for (let current = this.#head.next, index = 1; current !== null; current = current.next, index++) {
            acc = cb(acc, current.value, index, this); // ?
        }
        return acc;
        // ["a", "b", "c", "d"].reduce(console.log)
        // acc        curr     index     list
        // 'a'        'b'      1         ['a', 'b', 'c', 'd']
        // undefined  'c'      2         ['a', 'b', 'c', 'd']
        // undefined  'd'      3         ['a', 'b', 'c', 'd']
    }

    public reduceRight<S>(cb: (previousValue: S, currentValue: T, index: number, list: this) => S, initialValue: S): S;
    public reduceRight(cb: (previousValue: T, currentValue: T, index: number, list: this) => T): T;
    public reduceRight<S, X extends S | T>(cb: (previousValue: X, currentValue: T, index: number, list: this) => X, initialValue?: S) {

        if (this.#tail === null) {
            throw new TypeError('Reduce of empty list with no initial value');
        }

        let listLength = 0;
        for (let current = this.#head; current !== null; current = current.next) {
            listLength++;
        }

        if (initialValue !== undefined) {
            let acc = initialValue as X;
            for (let current = this.#tail, index = listLength - 1; current !== null; current = current.prev as ListNode<T>, index--) {
                acc = cb(acc, current.value, index, this);
            }
            return acc;
        }

        let acc = this.#tail.value as X;
        for (let current = this.#tail.prev, index = listLength - 2; current !== null; current = current.prev, index--) {
            acc = cb(acc, current.value, index, this);
        }
        return acc;
    }

    public slice(begin?: number, end?: number): List<T> {

        const newList = new LinkedList<T>();

        if (!this.#head) {
            return newList;
        }

        if (begin && begin >= 0 && !end) {
            return this.reduceRight<List<T>>((prev, curr, i) => {
                if (begin > i) {
                    return prev;
                }
                if (i >= begin) {
                    prev.unshift(curr);
                }
                return prev;
            }, newList)
        }

        if (begin && begin < 0 && !end) {
            let j = 0;
            return this.reduceRight<List<T>>((prev, curr) => {
                j -= 1;
                if (j >= begin) {
                    prev.unshift(curr);
                }
                return prev;
            }, newList);
        }

        if (begin && begin > 0 && end && end > 0) {
            return this.reduce<List<T>>((prev, curr, i) => {
                if (i >= begin && i < end) {
                    prev.push(curr);
                }
                return prev;
            }, newList);
        }

        // if (begin && begin > 0 && end && end < 0) {
        //     return this.reduce<List<T>>((prev, curr, i) => {
        //         if (i >= begin && i < end) {
        //             prev.push(curr);
        //         }
        //         return prev;
        //     }, newList);
        // }


        return this.reduce<List<T>>((prev, curr) => {
            prev.push(curr);
            return prev;
        }, newList);

        // console.log('list', Array.from(newList));
        return newList;



    }

}

// const l2: List<string> = new LinkedList<string>();

// l2.push("1");
// l2.push("2");
// l2.push("3");
// l2.push("4");
// const l2Iterable = Array.from(l2);
// console.log(l2);

// for (const item of l2) {
//     console.log(item);
// }

// console.log('new list', l2);


// console.log(Array.from(l2));
// console.log(l2);

// for(const x of l2) {
//   console.log(">>>>>", x);
// }

// let curr = l2.head;
// while(curr) {
//   console.log(curr.value);
//   curr = curr.next;
// }

// curr = l2.tail;
// while(curr) {
//   console.log(curr.value);
//   curr = curr.prev;
// }

// console.log('Hello, World!');



const sl = new LinkedList<number>();

sl.push(1);
sl.push(2);
sl.push(3);

sl.reduce((acc, curr, i, arr) => {

    return 0;
}, 0);

const arr = [0, 1, 2];
arr.reduce((prev, curr) => prev + curr, 0);