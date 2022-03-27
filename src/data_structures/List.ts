type ListNode<T> = {
  value: T;
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
    reduceRight
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
    slice
    splice
    */
   filter(cb: (value: T) => boolean): List<T>;
   every(cb: (value: T) => boolean): boolean;
   some(cb: (value: T) => boolean): boolean;
   includes(value: T): boolean;
   pop(): T | undefined;
   indexOf(value: T): number;
   reduce<S>(cb: (previousValue: S, currentValue: T, index: number, list: this) => S, initialValue: S): S;
//    foreach(cb: (value: T) => void): void;
}


const l1: List<string> = ["foobar", "baz", "qwerty"];

// l1.push("qqqqq");
// console.log(l1.map(x => x.length));

// interface ListIterator<T> extends Iterator<T> {
//     current: ListNode<T> | null;
//     next: (...args: [] | [undefined]) => IteratorResult<T, undefined>;
// }

// interface Iterator<T, TReturn = any, TNext = undefined> {
//     // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
//     next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
//     return?(value?: TReturn): IteratorResult<T, TReturn>;
//     throw?(e?: any): IteratorResult<T, TReturn>;
// }





export class LinkedList<T> implements List<T> {
    #head: ListNode<T> | null = null;
    #tail: ListNode<T> | null = null;

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

    // [Symbol.iterator](): ListIterator<T> {
    //     const listIterator: ListIterator<T> = {
    //         current: this.#head,
    //         next() {
    //             if (this.current !== null) {
    //                 const { value, next } = this.current;
    //                 this.current = next;
    //                 return { done: false, value: value };
    //             } else {
    //                 return { done: true, value: undefined };
    //             }
    //         }
    //     }
    //     return listIterator;
    // }

    public push(value: T): void {
        const newNode: ListNode<T> = {
            value: value,
            prev: this.#tail,
            next: null,
        };

        if (!this.#head || !this.#tail) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
    }

    public unshift(value: T): void {
        const newNode: ListNode<T> = {
            value: value,
            prev: null,
            next: this.#head,
        };

        if (!this.#head || !this.#tail) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#head.prev = newNode;
            this.#head = newNode;
        }
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
        let current = this.#head;
        while(current) {
            if (!cb(current.value)) {
                return false;
            }
            current = current.next;
        }
        return true;
    }

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
        // const current = this.#tail;
        // if (current) {
        //     const prev = current.prev;
        //     if (prev) {
        //         prev.next = null;
        //     } else {
        //         this.#head = prev;
        //         this.#tail = prev;
        //         return current.value;
        //     }
        //     this.#tail = prev;
        //     return current.value;
        // } else {
        //     return undefined;
        // }

        if (this.#tail === null) {
            return;
        }
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

    reduce<S>(cb: (previousValue: S, currentValue: T, index: number, list: this) => S, initialValue: S): S {
        // initialValue?: S
        // if (acc === undefined) {
        //     return;
        // }

        let acc = initialValue;

        for (let current = this.#head, index = 0; current !== null; current = current.next, index++) {
            acc = cb(acc, current.value, index, this);
        }
        return acc;

        // ["a", "b", "c", "d"].reduce(console.log)
        // acc        curr     index     list
        // 'a'        'b'      1         ['a', 'b', 'c', 'd']
        // undefined  'c'      2         ['a', 'b', 'c', 'd']
        // undefined  'd'      3         ['a', 'b', 'c', 'd']
    }

}

const l2: List<string> = new LinkedList<string>();

l2.push("1");
l2.push("2");
l2.push("3");
l2.push("4");
// const l2Iterable = Array.from(l2);
// console.log(l2Iterable);

// for (const item of l2) {
    // console.log(item);
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