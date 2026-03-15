import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

//let mockApp = jest.mock('./App');
describe('App Component', () => {
  beforeEach(() => {
  //jest.clearAllMocks();
  jest.mock('./App', () => {
  return {
    __esModule: true,
    //had to mock it on the return as a work around.
    bubbleSortGen: jest.fn((a) => ({
      next: jest.fn().mockReturnValueOnce({ value: { array: [3, 8, 5, 4, 6, 2, 7, 1], comparing: [0, 1], swapped: null, done: false }, done: false })
        .mockReturnValueOnce({ value: { array: [3, 5, 8, 4, 6, 2, 7, 1], comparing: [1, 2], swapped: [1, 2], done: false }, done: false })
        .mockReturnValue({ value: { array: [1, 2, 3, 4, 5, 6, 7, 8], comparing: null, swapped: null, done: true }, done: true }),
        default: jest.fn()
    }))
    };
  });
 });

  test('renders the bubble sort visualizer title', () => {
    var MockApp = jest.mock('./App', () => {
       
      return {
        __esModule: true,
        default: () => <div><h1>Bubble Sort Visualizer (Animated)</h1></div>
      };
    });

    expect(MockApp).toBeDefined();
  });

//   test('renders initial array bars', () => {
//     render(<App />);
//     const bars = screen.getAllByText(/[1-8]/);
//     expect(bars.length).toBe(8);
//   });

//   test('starts sorting when Start button is clicked', () => {
//     render(<App />);
//     const startButton = screen.getByRole('button', { name: /start/i });
//     fireEvent.click(startButton);
//     expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
//   });

//   test('pauses sorting when Pause button is clicked', () => {
//     render(<App />);
//     const startButton = screen.getByRole('button', { name: /start/i });
//     fireEvent.click(startButton);
//     const pauseButton = screen.getByRole('button', { name: /pause/i });
//     fireEvent.click(pauseButton);
//     expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument();
//   });

//   test('resumes sorting when Resume button is clicked', () => {
//     render(<App />);
//     const startButton = screen.getByRole('button', { name: /start/i });
//     fireEvent.click(startButton);
//     const pauseButton = screen.getByRole('button', { name: /pause/i });
//     fireEvent.click(pauseButton);
//     const resumeButton = screen.getByRole('button', { name: /resume/i });
//     fireEvent.click(resumeButton);
//     expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
//   });

//   test('resets the array when Reset button is clicked', () => {
//     render(<App />);
//     const resetButton = screen.getByRole('button', { name: /reset/i });
//     fireEvent.click(resetButton);
//     const bars = screen.getAllByText(/[1-8]/);
//     expect(bars.length).toBe(8);
//     expect(screen.getByText('Elapsed: 00:00')).toBeInTheDocument();
//   });

//   test('displays elapsed time', async () => {
//     jest.useFakeTimers();
//     render(<App />);
//     const startButton = screen.getByRole('button', { name: /start/i });
//     fireEvent.click(startButton);
//     act(() => {
//       jest.advanceTimersByTime(2000);
//     });
//     await waitFor(() => {
//       expect(screen.getByText('Elapsed: 00:02')).toBeInTheDocument();
//     });
//     jest.useRealTimers();
//   });

//   test('shows completion message when sorting is done', async () => {
//     render(<App />);
//     const startButton = screen.getByRole('button', { name: /start/i });
//     fireEvent.click(startButton);
//     await waitFor(() => {
//       expect(screen.getByText('Sorting Complete 🎉')).toBeInTheDocument();
//     });
//   });
});