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
}

export function createLinkedList(): LinkedList {

    const appendNode = (data: unknown) => {
        const newNode: ListNode = {
            data,
            next: null,
        }

        if (!list.head || !list.tail) {
            list.head = newNode;
            list.tail = newNode;
        }
        
        list.tail.next = newNode;
        list.tail = newNode;
    };

    const prependNode = (data: unknown) => {
        return;
    };

    const deleteNode = (data: unknown) => {
        return;
    };

    const list: LinkedList = {
        head: null,
        tail: null,
        appendNode,
        prependNode,
        deleteNode,
    };

    return list;
}
