interface Range extends Iterable<number> {
    from: number;
    to: number;
}

const range: Range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        interface RangeIterator extends Iterator<number> {
            current: number;
            last: number;
            next: (...args: [] | [undefined]) => IteratorResult<number, any>; // так требует указ
        }

        const rangeIterator: RangeIterator = {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            },
        }
        return rangeIterator;
    }
};

for (const num of range) {
    console.log(num);
}

export {};