import { LinkedList, List } from '../../data_structures/List';

describe('LinkedList', () => {

    const data1 = 'abc';
    const data2 = 'qwe';
    const data3 = 'zxc';

    test('method `push` should place new data in the end (tail) of list', () => {

        const list: List<string> = new LinkedList<string>();

        list.push(data1);
        list.push(data2);
        list.push(data3);

        const listIterable = Array.from(list);
        expect<string[]>(listIterable).toEqual<string[]>([data1, data2, data3]);
    });

    test('method `unshift` should place new data in the begining (head) of list', () => {
        const list: List<string> = new LinkedList<string>();

        list.unshift(data1);
        list.unshift(data2);
        list.unshift(data3);

        const listIterable = Array.from(list);
        expect<string[]>(listIterable).toEqual<string[]>([data3, data2, data1]);
    });

    test('method `map` should return new list with modified each list item', () => {

        const list: List<number> = new LinkedList<number>();

        list.push(1);
        list.push(2);
        list.push(3);

        const newList = list.map((item) => item * 10);
        const newListIterabale = Array.from(newList);

        expect<number[]>(newListIterabale).toEqual<number[]>([10, 20, 30]);
    });

    test('method `find` should return data value in case it was found or underfined', () => {

        const list: List<string> = new LinkedList<string>();

        list.push(data1);
        list.push(data2);
        list.push(data3);

        const foundData1 = list.find((item) => item === data1);
        const notFoundData1 = list.find((item) => item === 'qwerty');

        expect<string | undefined>(foundData1).toBe<string>(data1);
        expect<string | undefined>(notFoundData1).toBe<undefined>(undefined);
    });

    test('method `filter` should return new list with items which are consited with callback condition', () => {

        const dataColl = ['Hello1', data1, data2, 'Hello2', data3, 'Hello3'];
        const list: List<string> = new LinkedList<string>();
        dataColl.forEach((dataItem) => {
            list.push(dataItem);
        });

        const filteredList = list.filter((item) => item.includes('Hello'));
        const filtereListIterable = Array.from(filteredList);

        expect<string[]>(filtereListIterable).toEqual<string[]>(['Hello1', 'Hello2', 'Hello3']);
    });

    test('method `every` returns true in case all list item are consited with callback condition on other case returns false', () => {

        const dataColl = [2, 4, 6, 6, 10, 12];
        const list: List<number> = new LinkedList<number>();

        dataColl.forEach((dataItem) => {
            list.push(dataItem);
        });

        const isEven = (num: number): boolean => num % 2 === 0;

        expect<boolean>(list.every(isEven)).toBeTruthy();
        expect<boolean>(list.every((item) => item === 2)).toBeFalsy();
    });

    test('method `some` returns true in case some item of list is consited with callback condition on other case returns false', () => {

        const dataColl1 = [1, 3, 7, 9, 10, 1]; // true
        const list: List<number> = new LinkedList<number>();

        dataColl1.forEach((dataItem) => {
            list.push(dataItem);
        });

        const isEven = (num: number): boolean => num % 2 === 0;

        expect<boolean>(list.some(isEven)).toBeTruthy();
        expect<boolean>(list.some((item) => item === NaN)).toBeFalsy();
    });

    test('method `includes` returns true in case value in callback parameter is in list', () => {

        const dataColl = ['hello', 'morning', 'good', 'one'];

        const list: List<string> = new LinkedList<string>();

        dataColl.forEach((item) => {
            list.push(item);
        });

        expect<boolean>(list.includes('morning')).toBeTruthy();
        expect<boolean>(list.includes('qwerty')).toBeFalsy();
    });

    test('method `pop` deletes the last item of the list and returns it in case the list is empty method returns `underfined`', () => {

        const list: List<number> = new LinkedList<number>();

        list.push(1);
        list.push(2);
        list.push(3);

        const popped1 = list.pop();

        expect(popped1).toBe(3);
        expect(Array.from(list).length).toBe(2);
        expect(Array.from(list)[1]).toBe(2);

        const popped2 = list.pop();

        expect(popped2).toBe(2);
        expect(Array.from(list).length).toBe(1);
        expect(Array.from(list)[0]).toBe(1);

        const popped3 = list.pop();

        expect(popped3).toBe(1);
        expect(Array.from(list).length).toBe(0);
        expect(Array.from(list)[0]).toBe(undefined);

        const popped4 = list.pop();

        expect(popped4).toBe(undefined);
        expect(Array.from(list).length).toBe(0);
        expect(Array.from(list)[0]).toBe(undefined);

        const list2: List<number> = new LinkedList<number>();
        const popped = list2.pop();

        expect(popped).toBe(undefined);
        expect(Array.from(list).length).toBe(0);

    });
});