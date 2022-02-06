import { createLinkedList } from '../data_structures/linkedList';

describe('createLinkedList', () => {
    it('should return object with head, tail, appendNode, prependNode, deleteNode', () => {

        const linkedList = createLinkedList();

        expect(linkedList).toHaveProperty('head');
        expect(linkedList).toHaveProperty('tail');
        expect(linkedList).toHaveProperty('appendNode');
        expect(linkedList).toHaveProperty('prependNode');
        expect(linkedList).toHaveProperty('deleteNode');

    });

    it('appendNode method should receive any data, create a new nodeList and put it in the end of list', () => {
        const linkedList = createLinkedList();

        const data1 = 'someData1';
        const data2 = 'someData2';
        const data3 = 'someData3';

        linkedList.appendNode(data1);
        expect(linkedList.tail?.data).toEqual(data1);
        expect(linkedList.head?.data).toEqual(data1);
        expect(linkedList.head?.next).not.toBeNull();


        linkedList.appendNode(data2);
        expect(linkedList.tail?.data).toEqual(data2);
        expect(linkedList.head?.data).toEqual(data1);
        expect(linkedList.tail?.next).toBeNull();

        linkedList.appendNode(data3);
        expect(linkedList.tail?.data).toEqual(data3);
        expect(linkedList.head?.next?.data).toEqual(data2);
        expect(linkedList.head?.data).toEqual(data1);
        expect(linkedList.tail?.next).toBeNull();
    });
});