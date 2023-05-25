import { configureStore } from '@reduxjs/toolkit';
import wordsSlice from '../feauters/words/wordsSlice';

export default configureStore({
  reducer: {
    words: wordsSlice,
  },
});
