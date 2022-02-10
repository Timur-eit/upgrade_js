export interface List<T> extends Iterable<T> {
  push(value: T): void;
  unshift(value: T): void;
  map<K>(cb: (value: T) => K): List<K>;
  find(cb: (value: T) => boolean): T | undefined;
  // reduce reduceRight filter every some includes reverse sort pop unshift indexOf foreach slice splice
}

const l1: List<string> = ["foobar", "baz", "qwerty"];

// l1.push("qqqqq");
// console.log(l1.map(x => x.length));

type ListNode<T> = {
  value: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;
}

class LinkedList<T> implements List<T> {
    private head: ListNode<T> | null = null;
    private tail: ListNode<T> | null = null;
    
    //     head         tail
    //        ↓         ↓
    // null ← 1 ←→ 2 ←→ 3 ←→ null
    
    //     head              tail
    //        ↓              ↓
    // null ← 1 ←→ 2 ←→ 3 ←→ 4 ←→ null

    [Symbol.iterator]() {
      let tmp = this.head;
      type R = {
        done: boolean,
        value: T,
      }
      return {
        next() {
          if (tmp === null) {
            return {
              done: true,
            } as R;
          }
          const { value, next } = tmp;
          tmp = next;

          return {
            done: false,
            value: value,
          };
        }
      }
    }

    public push(value: T): void {
        const newNode: ListNode<T> = {
            value: value,
            prev: this.tail,
            next: null,
        };
        
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    public unshift(value: T): void {

    }
    
    public map<K>(cb: (value: T) => K): List<K> {
        const result = new LinkedList<K>();
        let current = this.head;
        while(current) {
            const newValue = cb(current.value);
            result.push(newValue);
            current = current.next;
        }
        return result;
    }
    
    public find(cb: (value: T) => boolean): T | undefined {
      return undefined;
    }
  
}

const l2: List<string> = new LinkedList<string>();

l2.push("1");
l2.push("2");
l2.push("3");
l2.push("4");

console.log(Array.from(l2));

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