import { createSlice } from '@reduxjs/toolkit';
export const filterText = '';
export const filterContactsSlice = createSlice({
  name: 'filter',
  initialState: filterText,
  reducers: {
    filterContacts: (state, { payload }) => payload,
  },
});
export const { filterContacts } = filterContactsSlice.actions;
export const filterReducer = filterContactsSlice.reducer;
