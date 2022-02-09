class ListNode {
    data: unknown;
    next: null | ListNode;
    constructor(data: unknown, next?: null | ListNode) {
        this.data = data;
        this.next = next !== undefined ? next : null;
    }
}

type ListDataHandleMethod = <Type>(data: Type) => void;
type ListFindMethod = <Type>(data: Type) => ListNode | null;

export type LinkedList = {
    head: null | ListNode;
    tail: null | ListNode;
    appendNode: ListDataHandleMethod;
    prependNode: ListDataHandleMethod;
    deleteNode: ListDataHandleMethod;
    findNode: ListFindMethod;
    toArray: () => Array<ListNode>;
}


export function createLinkedList(): LinkedList {

    const appendNode: ListDataHandleMethod = (data) => {
        const newNode: ListNode = new ListNode(data);

        if (!list.head || !list.tail) {
            list.head = newNode;
            list.tail = newNode;
        }
        list.tail.next = newNode;
        list.tail = newNode;
    };

    const prependNode: ListDataHandleMethod = (data) => {
        const prevHead = list.head;
        const newNode = new ListNode(data, prevHead);

        list.head = newNode;
        list.head.next = prevHead;

        if (!list.tail) {
            list.tail = newNode;
        }
    };

    const deleteNode: ListDataHandleMethod = (data) => {
        return;
    };

    const findNode: ListFindMethod = (data) => {
        let currentNode = list.head;

        if (currentNode) {
            while (currentNode) {
                if (currentNode.data === data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    };

    const toArray = () => {
        const result = [];
        let currentNode = list.head;
        if (currentNode) {
            while (currentNode.next) {
                result.push(currentNode);
                currentNode = currentNode.next;
            }
            result.push(currentNode);
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
