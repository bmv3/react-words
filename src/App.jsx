import { useState } from 'react';
import wordsList from './data.js';
import WordsTable from './WordsTable';
import WordsHeader from './WordsHeader';

import './App.css';

function App() {
  const [show, setShow] = useState([]);

  

  return (
    <div className="App">
      <WordsHeader />
      <WordsTable words={wordsList} />
    </div>
  );
}

export default App;
