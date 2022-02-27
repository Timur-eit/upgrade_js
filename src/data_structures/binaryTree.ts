// extends Iterable<T>
export interface KeyValueStorage<K, V>  {
  add(key: K, value: V): void;
  get(key: K): V | null;
  // map<T>(cb: (value: V) => T): BinarySearchTree<K, T>;
}

export interface Tree<K, V> {
  // dfs(cb: (k: K, v: V) => void): void; // dfs bfs
  // bfs(cb: (k: K, v: V) => void): void; // dfs bfs
}


type TreeNode<K, V> = {
  key: K;
  value: V;
  left: TreeNode<K, V> | null;
  right: TreeNode<K, V> | null;
}

//     7
//   /   \
//  5     10
//  /\    /\
// 3  6  8  23

export class BinarySearchTree<K, V> implements KeyValueStorage<K, V>, Tree<K, V> {
    #root: TreeNode<K, V> | null = {
      // @ts-ignore
      key: 7,
      left: {
        // @ts-ignore
        key: 5,
        left: {
          // @ts-ignore
          key: 3,
          left: null,
          right: null,
        },
        right: {
          // @ts-ignore
          key: 6,
          left: null,
          right: null,
        },
      },
      right: {
        // @ts-ignore
        key: 10,
        left: {
          // @ts-ignore
          key: 8,
          left: null,
          right: null,
        },
        right: {
          // @ts-ignore
          key: 23,
          left: null,
          right: null,
        },
      }
    };
    
    public get(key: K): V | null {
        let root = this.#root;    

        while(root !== null) {
          console.log(root);
            if (root.key === key) {
                return root.value;
            }
            
            if (root.key < key) {
              root = root.right;
            } else {
              root = root.left;
            }
        }
        
        return null;
    }

    public add(key: K, value: V): void {

    }
    


}


const tree = new BinarySearchTree();
console.log(tree.get(23));
