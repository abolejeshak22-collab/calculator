import { useState } from 'react';
import './App.css';

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (val) => {
    setInput((prev) => prev + val);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = new Function(`return ${input}`)();
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ maxWidth: '260px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      {/* Display Screen */}
      <input
        type="text"
        value={input}
        readOnly
        placeholder="0"
        style={{
          width: '100%',
          height: '48px',
          fontSize: '22px',
          textAlign: 'right',
          padding: '8px',
          marginBottom: '10px',
          boxSizing: 'border-box'
        }}
      />

      {/* Button Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px'
        }}
      >
        <button onClick={handleClear} style={{ gridColumn: 'span 2', padding: '12px' }}>Clear</button>
        <button onClick={handleDelete} style={{ padding: '12px' }}>DEL</button>
        <button onClick={() => handleClick('/')} style={{ padding: '12px' }}>/</button>

        <button onClick={() => handleClick('7')} style={{ padding: '12px' }}>7</button>
        <button onClick={() => handleClick('8')} style={{ padding: '12px' }}>8</button>
        <button onClick={() => handleClick('9')} style={{ padding: '12px' }}>9</button>
        <button onClick={() => handleClick('*')} style={{ padding: '12px' }}>*</button>

        <button onClick={() => handleClick('4')} style={{ padding: '12px' }}>4</button>
        <button onClick={() => handleClick('5')} style={{ padding: '12px' }}>5</button>
        <button onClick={() => handleClick('6')} style={{ padding: '12px' }}>6</button>
        <button onClick={() => handleClick('-')} style={{ padding: '12px' }}>-</button>

        <button onClick={() => handleClick('1')} style={{ padding: '12px' }}>1</button>
        <button onClick={() => handleClick('2')} style={{ padding: '12px' }}>2</button>
        <button onClick={() => handleClick('3')} style={{ padding: '12px' }}>3</button>
        <button onClick={() => handleClick('+')} style={{ padding: '12px' }}>+</button>

        <button onClick={() => handleClick('0')} style={{ gridColumn: 'span 2', padding: '12px' }}>0</button>
        <button onClick={() => handleClick('.')} style={{ padding: '12px' }}>.</button>
        <button onClick={handleCalculate} style={{ padding: '12px', background: '#007bff', color: '#fff' }}>=</button>
      </div>
    </div>
  );
}