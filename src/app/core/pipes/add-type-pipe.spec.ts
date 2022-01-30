import { AddTypePipe } from './add-type-pipe';

describe('AddTypePipe', () => {
    it('create an instance', () => {
        const pipe = new AddTypePipe();
        expect(pipe).toBeTruthy();
    });

    it('create an instance', () => {
        const pipe = new AddTypePipe();
        expect(pipe.transform('1', "Day")).toBe("1 Day");
    });
});