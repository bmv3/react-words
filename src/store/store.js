import { configureStore } from '@reduxjs/toolkit';
import wordsSlice from '../feauters/words/wordsSlice';

export const store = configureStore({
  reducer: {
    words: wordsSlice,
  },
});
