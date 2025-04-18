import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const editorRef = useRef(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [mood, setMood] = useState('😊 Happy');

  // Load entry from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('journal_' + date);
    if (saved) {
      const data = JSON.parse(saved);
      editorRef.current.innerHTML = data.content;
      setMood(data.mood);
    } else {
      editorRef.current.innerHTML = '';
      setMood('😊 Happy');
    }
  }, [date]);

  // Save to localStorage
  const saveEntry = () => {
    const content = editorRef.current.innerHTML;
    const data = {
      mood,
      content,
    };
    localStorage.setItem('journal_' + date, JSON.stringify(data));
  };

  // Format text
  const format = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  // Clear editor
  const clearEntry = () => {
    editorRef.current.innerHTML = '';
    setMood('😊 Happy');
    saveEntry();
  };

  // Export to .txt file
  const saveToFile = () => {
    const text = editorRef.current.innerText;
    const blob = new Blob([`Date: ${date}\nMood: ${mood}\n\n${text}`], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `journal_${date}.txt`;
    a.click();
  };

  return (
    <div className="container">
      <h1>📔 Daily Journal</h1>

      <div className="meta">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <select value={mood} onChange={(e) => setMood(e.target.value)} onBlur={saveEntry}>
          <option value="😊 Happy">😊 Happy</option>
          <option value="😐 Neutral">😐 Neutral</option>
          <option value="☹️ Sad">☹️ Sad</option>
          <option value="😠 Angry">😠 Angry</option>
          <option value="😴 Tired">😴 Tired</option>
        </select>
      </div>

      <div className="toolbar">
        <button onClick={() => format('bold')}><b>B</b></button>
        <button onClick={() => format('italic')}><i>I</i></button>
        <button onClick={() => format('underline')}><u>U</u></button>
        <button onClick={clearEntry}>🗑️ Clear</button>
        <button onClick={saveToFile}>📁 Export</button>
      </div>

      <div
        id="editor"
        ref={editorRef}
        contentEditable
        onInput={saveEntry}
        placeholder="Write here..."
      />
    </div>
  );
}

export default App;
