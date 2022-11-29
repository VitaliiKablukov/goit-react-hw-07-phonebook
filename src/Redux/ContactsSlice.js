import { createSlice, nanoid } from '@reduxjs/toolkit';
export const userContacts = [];
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: userContacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
