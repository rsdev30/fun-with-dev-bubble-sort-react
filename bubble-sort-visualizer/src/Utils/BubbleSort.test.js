import { bubbleSort } from './BubbleSort';

describe('bubbleSort generator', () => {
    test('sorts [3,2,1] and yields comparisons and swaps in expected order', () => {
        const steps = [...bubbleSort([3, 2, 1])];
        expect(steps.length).toBe(7);

        expect(steps[0]).toEqual({ array: [3, 2, 1], comparing: [0, 1] });
        expect(steps[1]).toEqual({ array: [2, 3, 1], swapped: [0, 1] });
        expect(steps[2]).toEqual({ array: [2, 3, 1], comparing: [1, 2] });
        expect(steps[3]).toEqual({ array: [2, 1, 3], swapped: [1, 2] });
        expect(steps[4]).toEqual({ array: [2, 1, 3], comparing: [0, 1] });
        expect(steps[5]).toEqual({ array: [1, 2, 3], swapped: [0, 1] });
        expect(steps[6]).toEqual({ array: [1, 2, 3], done: true });
    });

    test('already sorted array yields only comparisons then done (early termination)', () => {
        const steps = [...bubbleSort([1, 2, 3])];
        expect(steps.length).toBe(3);
        expect(steps[0]).toEqual({ array: [1, 2, 3], comparing: [0, 1] });
        expect(steps[1]).toEqual({ array: [1, 2, 3], comparing: [1, 2] });
        expect(steps[2]).toEqual({ array: [1, 2, 3], done: true });
        expect(steps.some(s => s.swapped)).toBe(false);
    });

    test('empty and single-element arrays yield only done with original array', () => {
        const emptySteps = [...bubbleSort([])];
        expect(emptySteps).toEqual([{ array: [], done: true }]);

        const singleSteps = [...bubbleSort([42])];
        expect(singleSteps).toEqual([{ array: [42], done: true }]);
    });

    test('preserves input (does not mutate original array)', () => {
        const original = [3, 1, 2];
        const copy = original.slice();
        for (const _ of bubbleSort(original)) {
            // consume generator to ensure it runs without mutating the original
        }
        expect(original).toEqual(copy);
    });
});