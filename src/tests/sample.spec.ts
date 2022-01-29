import sampleFoo from '../sampleFoo';

describe('sampleFoo', () => {
    it('should retrun string "Hello"', () => {
        expect(sampleFoo()).toEqual('Hello');
    });
});