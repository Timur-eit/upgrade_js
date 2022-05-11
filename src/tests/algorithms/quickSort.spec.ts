import quickSort from '../../algorithms/sort/quickSort'

describe('quickSort', () => {
    test('sort unsorted collections of numbers', () => {
      const numbers1 = [99, 77, 33, 1, 100, 5];
      const numbers2 = [100, 99, 88, 77, 66, 55, 44, 33, 22, 11, 0];

      function comparator(a: number, b: number): number {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      }
      

      expect<number[]>(
        quickSort<number>(
          numbers1,
          0,
          numbers1.length - 1,
          comparator
        )
      ).toEqual<number[]>([1, 5, 33, 77, 99, 100]);
      
      expect<number[]>(
        quickSort<number>(
          numbers2,
          0,
          numbers2.length - 1,
          comparator
        )
      ).toEqual<number[]>([0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100]);

    });

    test('sort collection of objects', () => {
      
      type Person = {
        name: string;
        value: number;
      }
      
      const items: Person[] = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 0 },
        { name: 'Zeros', value: 37 }
      ];

      function comparator1(
        a: Person,
        b: Person
      ): number {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      }
      
      function comparator2(
        a: Person,
        b: Person
      ): number {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }

      expect<Person[]>(
        quickSort<Person>(
          items,
          0,
          items.length - 1,
          comparator1
        )
      ).toEqual<Person[]>([
          { name: 'The', value: -12 },
          { name: 'Magnetic', value: 0 },
          { name: 'Edward', value: 21 },
          { name: 'Sharpe', value: 37 },
          { name: 'Zeros', value: 37 },
          { name: 'And', value: 45 },
      ]);
      
      expect<Person[]>(
        quickSort<Person>(
          items,
          0,
          items.length - 1,
          comparator2
        )
      ).toEqual<Person[]>([
        { name: 'And', value: 45 },
        { name: 'Edward', value: 21 },
        { name: 'Magnetic', value: 0 },
        { name: 'Sharpe', value: 37 },
        { name: 'The', value: -12 },
        { name: 'Zeros', value: 37 },
      ]);
    });

    test('sort collection of words with default comparator', () => {
      const arr = ['Zack', 'Marla', 'Bob', 'John', 'Arnold'];

      expect<string[]>(
        quickSort<string>(
          arr,
          0,
          arr.length - 1,
        )
      ).toEqual<string[]>(['Arnold', 'Bob', 'John', 'Marla', 'Zack']);

    });    
});