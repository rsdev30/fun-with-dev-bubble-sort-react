import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { bubbleSort } from './Utils/BubbleSort';

function App() {
  const initialArray = [8, 3, 5, 4, 6, 2, 7, 1];

  const [state, setState] = useState({ array: initialArray, comparing: null, swapped: null, done: false });

  const [isPlaying, setIsPlaying] = useState(false);
  const generatorRef = useRef(null);
  const intervalRef = useRef(null);

  const start = () => {
    generatorRef.current = bubbleSort(state.array);
    setIsPlaying(true);
  }

  const stop = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => { stop(); setState({ array: initialArray, comparing: null, swapped: null, done: false }); generatorRef.current = null; };
  useEffect(() => {
    if (!isPlaying) return;
    intervalRef.current = setInterval(() => {
      const result = generatorRef.current.next();
      if (result.done) {
        stop(); return;
      }
      setState(result.value);
    }, 600);

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  return (<div style={{ padding: 20, fontFamily: "sans-serif" }}> <h2>Bubble Sort Visualizer (Animated)</h2> <div style={{ display: "flex", gap: 10, marginBottom: 20 }}> {state.array.map((num, idx) => { const isComparing = state.comparing && state.comparing.includes(idx); const isSwapped = state.swapped && state.swapped.includes(idx); return (<div key={idx} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6, background: isSwapped ? "#ff7675" : isComparing ? "#74b9ff" : "#dfe6e9", border: "2px solid #2d3436", fontWeight: "bold", transition: "background 0.3s ease" }} > {num} </div>); })} </div> {!state.done && (<> {!isPlaying && (<button onClick={generatorRef.current ? () => setIsPlaying(true) : start} style={{ padding: "10px 20px", fontSize: 16, marginRight: 10, borderRadius: 6, cursor: "pointer" }} > {generatorRef.current ? "Resume" : "Start"} </button>)} {isPlaying && (<button onClick={stop} style={{ padding: "10px 20px", fontSize: 16, marginRight: 10, borderRadius: 6, cursor: "pointer" }} > Pause </button>)} </>)} <button onClick={reset} style={{ padding: "10px 20px", fontSize: 16, borderRadius: 6, cursor: "pointer" }} > Reset </button> {state.done && <h3>Sorting Complete 🎉</h3>} </div>);
}

export default App;
