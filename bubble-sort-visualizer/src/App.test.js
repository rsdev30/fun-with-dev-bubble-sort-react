import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

jest.mock('./Utils/BubbleSort', () => ({
    bubbleSort: function* mockBubbleSort(array) {
        yield { array, comparing: [0, 1], swapped: null, done: false };
        yield { array, comparing: null, swapped: [0, 1], done: false };
        yield { array, comparing: null, swapped: null, done: true };
    }
}));

describe('App Component', () => {
    test('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('Bubble Sort Visualizer (Animated)')).toBeInTheDocument();
    });

    test('displays initial array correctly', () => {
        render(<App />);
        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('shows Start button initially', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Start/i })).toBeInTheDocument();
    });

    test('Start button changes to Pause when clicked', () => {
        render(<App />);
        const startBtn = screen.getByRole('button', { name: /Start/i });
        fireEvent.click(startBtn);
        expect(screen.getByRole('button', { name: /Pause/i })).toBeInTheDocument();
    });

    test('Reset button is always visible', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    });

    test('Reset button resets array to initial state', () => {
        render(<App />);
        const resetBtn = screen.getByRole('button', { name: /Reset/i });
        fireEvent.click(resetBtn);
        expect(screen.getByText('8')).toBeInTheDocument();
    });

    test('Pause button stops animation', () => {
        render(<App />);
        fireEvent.click(screen.getByRole('button', { name: /Start/i }));
        fireEvent.click(screen.getByRole('button', { name: /Pause/i }));
        expect(screen.getByRole('button', { name: /Resume/i })).toBeInTheDocument();
    });

    test('elapsed time displays and updates while playing, pauses and resets', () => {
        jest.useFakeTimers();
        try {
            render(<App />);

            // initial
            expect(screen.getByText(/Elapsed:/i)).toHaveTextContent('Elapsed: 00:00');

            // start and advance 2.5 seconds -> should show 00:02
            fireEvent.click(screen.getByRole('button', { name: /Start/i }));
            act(() => {
                jest.advanceTimersByTime(2500);
            });
            expect(screen.getByText(/Elapsed:/i)).toHaveTextContent('Elapsed: 00:02');

            act(() => {
                jest.advanceTimersByTime(3000);
            });
            expect(screen.getByText(/Elapsed:/i)).toHaveTextContent('Elapsed: 00:02');

            // reset -> back to 00:00
            fireEvent.click(screen.getByRole('button', { name: /Reset/i }));
            expect(screen.getByText(/Elapsed:/i)).toHaveTextContent('Elapsed: 00:00');
        } finally {
            jest.useRealTimers();
        }
    });
});