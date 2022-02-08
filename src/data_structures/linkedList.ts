export type ListNode = {
    data: unknown;
    next: null | ListNode;
    prev?: null | ListNode;
}

export type LinkedList = {
    head: null | ListNode;
    tail: null | ListNode;
    appendNode: (data: unknown) => void;
    prependNode: (data: unknown) => void;
    deleteNode: (data: unknown) => void;
    findNode: (data: unknown) => void;
}

export function createLinkedList(): LinkedList {

    const appendNode = (data: unknown) => {
        const newNode: ListNode = {
            data,
            next: null,
        };

        if (!list.head || !list.tail) {
            list.head = newNode;
            list.tail = newNode;
        }

        list.tail.next = newNode;
        list.tail = newNode;
    };

    const prependNode = (data: unknown) => {
        
        const prevHead = list.head;
        
        const newNode: ListNode = {
            data,
            next: prevHead,
        };
        
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

    const list: LinkedList = {
        head: null,
        tail: null,
        appendNode,
        prependNode,
        deleteNode,
        findNode,
    };

    return list;
}
