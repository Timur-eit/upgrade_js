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

    test('method `indexOf` return the first index of searched value in case such value was not found it should return -1', () => {

        const list: List<string> = new LinkedList<string>();

        list.push('Bob');
        list.push('John');
        list.push('Mike');
        list.push('Sandy');

        expect<number>(list.indexOf('Bob')).toBe(0);
        expect<number>(list.indexOf('John')).toBe(1);
        expect<number>(list.indexOf('Mike')).toBe(2);
        expect<number>(list.indexOf('Sandy')).toBe(3);
        expect<number>(list.indexOf('Marla')).toBe(-1);
    });

    test('method reduce returns sum of all numbers from list and initial value in case initial value was passed', () => {
        const sl = new LinkedList<number>();

        sl.push(1);
        sl.push(2);
        sl.push(3);

        const reducedNumber = sl.reduce((prev, curr, i) => {
            return prev + curr + i;
        }, 1);

        const reducedNumber2 = sl.reduce((prev, curr, i) => {
            return prev + curr + i;
        });

        expect<number>(reducedNumber).toBe(10);
        expect<number>(reducedNumber2).toBe(9);
    });

    test('method reduce returns sum of all numbers from list without initial value in case initial value was not passed', () => {
        const sl = new LinkedList<number>();

        sl.push(1);
        sl.push(2);
        sl.push(3);

        const reducedNumber = sl.reduce((prev, curr, i) => {
            return prev + curr + i;
        });

        expect<number>(reducedNumber).toBe(9);

    });

    test('method reduce throw a TypeError in case list is empty and there is no initial value', () => {
        const emptyList = new LinkedList<number>();

        expect(() => emptyList.reduce((prev, curr) => prev + curr)).toThrowError('Reduce of empty list with no initial value');
    })


    test('method reduceRight returns sum of all numbers from list (from right-to-left) and initial value in case initial value was passed', () => {
        const sl = new LinkedList<string>();

        sl.push('a');
        sl.push('b');
        sl.push('c');
        sl.push('d');

        let checkIndex1 = 0;
        const reducedNumber1 = sl.reduceRight((prev, curr, i) => {
            checkIndex1 += i;
            return prev + curr;
        }, 'e');

        let checkIndex2 = 0;
        const reducedNumber2 = sl.reduceRight((prev, curr, i) => {
            checkIndex2 += i;
            return prev + curr;
        });

        expect<string>(reducedNumber1).toBe<string>('edcba');
        expect<number>(checkIndex1).toBe<number>(6);
        expect<string>(reducedNumber2).toBe<string>('dcba');
        expect<number>(checkIndex2).toBe<number>(3);
    });

    test('the slice() returns a copy of a portion of a list selected from start to end (end not included) where start and end represent the index of items in that list', () => {

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']; // 5
        const animalsList = new LinkedList<string>();
        animals.forEach((item) => {
            animalsList.push(item);
        });
        
        expect<string[]>(Array.from(animalsList.slice())).toEqual<string[]>(animals);        
        expect<string[]>(Array.from(animalsList.slice(0))).toEqual<string[]>(animals);
        expect<string[]>(Array.from(animalsList.slice(1))).toEqual<string[]>(['bison', 'camel', 'duck', 'elephant']);
        expect<string[]>(Array.from(animalsList.slice(2))).toEqual<string[]>(['camel', 'duck', 'elephant']);
        expect<string[]>(Array.from(animalsList.slice(3))).toEqual<string[]>(['duck', 'elephant']);
        
        expect<string[]>(Array.from(animalsList.slice(6))).toEqual<string[]>([]);


        expect<string[]>(Array.from(animalsList.slice(-1))).toEqual<string[]>(['elephant']);
        expect<string[]>(Array.from(animalsList.slice(-2))).toEqual<string[]>(['duck', 'elephant']);
        expect<string[]>(Array.from(animalsList.slice(-3))).toEqual<string[]>(['camel', 'duck', 'elephant']);
        
        expect<string[]>(Array.from(animalsList.slice(1, 5))).toEqual<string[]>(['bison', 'camel', 'duck', 'elephant']);
        expect<string[]>(Array.from(animalsList.slice(1, 4))).toEqual<string[]>(['bison', 'camel', 'duck']);        
        expect<string[]>(Array.from(animalsList.slice(2, 5))).toEqual<string[]>(['camel', 'duck', 'elephant']);
        expect<string[]>(Array.from(animalsList.slice(2, 4))).toEqual<string[]>(['camel', 'duck']);
        expect<string[]>(Array.from(animalsList.slice(2, 3))).toEqual<string[]>(['camel']);
    });

    test('check length of list', () => {
        const list = new LinkedList<string>();
        
        list.push('value1');    
        expect<number>(list.length).toEqual<number>(1);
        list.push('value2');
        expect<number>(list.length).toEqual<number>(2);
        list.push('value3');
        expect<number>(list.length).toEqual<number>(3);
        list.push('value4');
        
        list.unshift('value5');
        expect<number>(list.length).toEqual<number>(5);
        
        list.pop();
        expect<number>(list.length).toEqual<number>(4);
        list.pop();
        expect<number>(list.length).toEqual<number>(3);
        list.pop();
        expect<number>(list.length).toEqual<number>(2);
        list.pop();
        expect<number>(list.length).toEqual<number>(1);
        
        list.pop();
        expect<number>(list.length).toEqual<number>(0);
        list.pop();
        expect<number>(list.length).toEqual<number>(0);
    });

    test.skip('private method getSmallestValue returns the smalles value of the list in case list is empty returns null', () => {
      const list = new LinkedList<number>();
      list.push(100);
      list.push(55);
      list.push(1);
      list.push(0);
      
      // expect<number>(list.getSmallestValue()).toEqual<number>(0);

      const emptyList = new LinkedList<numer>();
      // expect<number>(emptyList.getSmallestValue()).toBeNull();
      
    });

  test('method selectSort() return sorted list', () => {
    const list = new LinkedList<number>();
    list.push(100);
    list.push(55);
    list.push(200);
    list.push(10);
    list.push(15);
    list.push(1);

    expect<number[]>(Array.from(list.selectSort())).toEqual<number[]>([1, 10, 15, 55, 100, 200]);
  })

});