import { useState, useEffect } from 'react';
import wordsList from './data.js';
import WordsTable from './WordsTable';
import WordsHeader from './WordsHeader';
import { useDispatch } from 'react-redux';
import { setWords } from './feauters/words/wordsSlice';
import { fetchWords } from './fetchWords';
// import './App.css';

function App() {
  const dispatch = useDispatch();
  const [show, setShow] = useState([]);

  useEffect(() => {
    const words = fetchWords('data.js');
    dispatch(setWords(words));
  }, []);

  return (
    <div className="App">
      <WordsHeader />
      <WordsTable words={wordsList} show={show} setShow={() => setShow} />
    </div>
  );
}

export default App;
