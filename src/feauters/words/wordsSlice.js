import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [],
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    },
  },
});

export const { setWords } = wordsSlice.actions;
export default wordsSlice.reducer;
