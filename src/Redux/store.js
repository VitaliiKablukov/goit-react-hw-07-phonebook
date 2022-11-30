import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterContacts';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
