import { ToIdPipe } from './to-id.pipe';

describe('ToIdPipe', () => {
    it('create an instance', () => {
        const pipe = new ToIdPipe();
        expect(pipe).toBeTruthy();
    });

    it('create an instance', () => {
        const pipe = new ToIdPipe();
        expect(pipe.transform('http://testing.com/planet/1')).toBe(1);
    });
});
