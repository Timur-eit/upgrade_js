interface Range extends Iterable<number> {
    from: number;
    to: number;
}

const range: Range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        
        // () => Iterator<number, any, undefined>
        
        interface RangeIterator extends Iterator<number> {
            current: number;
            last: number;
            // next: () => { done: boolean; value?: number; }
            next: (...args: [] | [undefined]) => IteratorResult<number, any>;
        }

        const rangeIterator: RangeIterator = {
            current: this.from,
            last: this.to,
            // @ts-ignore
            // ?
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
}

for (const num of range) {
    console.log(num);
}

export {};