import { createLinkedList } from '../data_structures/linkedList';

describe('createLinkedList', () => {
    
    const data1 = 'Data_1';
    const data2 = 'Data_2';
    const data3 = 'Data_3';    
    const data4 = 'Data_4';    
    
    it('should return object with head, tail, appendNode, prependNode, deleteNode', () => {

        const linkedList = createLinkedList();

        expect(linkedList).toHaveProperty('head');
        expect(linkedList).toHaveProperty('tail');
        expect(linkedList).toHaveProperty('appendNode');
        expect(linkedList).toHaveProperty('prependNode');
        expect(linkedList).toHaveProperty('deleteNode');
        expect(linkedList).toHaveProperty('findNode');
        expect(linkedList).toHaveProperty('toArray');

    });

    it('appendNode method should receive any data, create a new nodeList and put it in the end of list', () => {
        const linkedList = createLinkedList();

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

    it('prependNode method should receive any data, create a new nodeList and put it in the start of list', () => {
        const linkedList = createLinkedList();

        linkedList.prependNode(data1);
        expect(linkedList.head?.data).toEqual(data1);
        expect(linkedList.tail?.data).toEqual(data1);
        expect(linkedList.head?.next).toBeNull();

        linkedList.prependNode(data2);
        expect(linkedList.head?.data).toEqual(data2);
        expect(linkedList.tail?.data).toEqual(data1);
        expect(linkedList.head?.next).not.toBeNull();
        
        linkedList.prependNode(data3);
        expect(linkedList.head?.data).toEqual(data3);
        expect(linkedList.head?.next?.data).toEqual(data2);
        expect(linkedList.head?.next?.next?.data).toEqual(data1);
        expect(linkedList.tail?.data).toEqual(data1);
        expect(linkedList.head?.next).not.toBeNull();
    });

    it('toArray should return array with all nodes', () => {
        const linkedList = createLinkedList();
        
        let nodesArray = linkedList.toArray();
        
        expect(nodesArray.length).toEqual(0);

        linkedList.appendNode(data1);
        linkedList.appendNode(data2);
        linkedList.appendNode(data3);
        linkedList.appendNode(data4);

        nodesArray = linkedList.toArray();

        expect(nodesArray.length).toEqual(4);
        expect(nodesArray[0].data).toEqual(data1);
        expect(nodesArray[2].data).toEqual(data3);
        expect(nodesArray[1].next).not.toBeNull();
        expect(nodesArray[3].next).toBeNull();
    });

    it('find should return node with data which received as argument or should return null incase data was not found', () => {
        const linkedList = createLinkedList();
        
        expect(linkedList.findNode(data1)).toBeNull();
        
        linkedList.appendNode(data1);
        linkedList.appendNode(data2);
        linkedList.appendNode(data3);
        linkedList.prependNode(data4);

        expect(linkedList.findNode(data3)?.data).toEqual(data3);
        expect(linkedList.findNode(data2)?.data).toEqual(data2);
        expect(linkedList.findNode(data1)?.data).toEqual(data1);
        expect(linkedList.findNode(data4)?.data).toEqual(data4);
        expect(linkedList.findNode('qwe')).toBeNull();

    });
});