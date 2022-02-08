class ListNode {
    data: unknown;
    next: null | ListNode;
    constructor(data: unknown, next?: null | ListNode) {
        this.data = data;
        this.next = next !== undefined ? next : null;
    }
}

export type LinkedList = {
    head: null | ListNode;
    tail: null | ListNode;
    appendNode: (data: unknown) => void;
    prependNode: (data: unknown) => void;
    deleteNode: (data: unknown) => void;
    findNode: (data: unknown) => void;
    toArray: () => Array<ListNode>;
}


export function createLinkedList(): LinkedList {

    const appendNode = (data: unknown) => {
        const newNode: ListNode = new ListNode(data);
        
        if (!list.head || !list.tail) {
            list.head = newNode;
            list.tail = newNode;
        }
        list.tail.next = newNode;
        list.tail = newNode;
    };

    const prependNode = (data: unknown) => {
        const prevHead = list.head;
        const newNode = new ListNode(data, prevHead);    

        list.head = newNode;
        list.head.next = prevHead;

        if (!list.tail) {
            list.tail = newNode;
        }
    };

    const deleteNode = (data: unknown) => {
        return;
    };

    const findNode = (data: unknown) => {
        return;
    };

    const toArray = () => {
        const result = [];
        let currentNode = list.head;

        if (currentNode) {
            while (currentNode?.next !== null) {
                result.push(currentNode);
                currentNode = currentNode?.next;
            }
        }
        return result;
    }

    const list: LinkedList = {
        head: null,
        tail: null,
        appendNode,
        prependNode,
        deleteNode,
        findNode,
        toArray,
    };

    return list;
}
