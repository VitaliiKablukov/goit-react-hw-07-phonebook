export const selectContacts = state => state.contacts.userContacts;

export const selectFilterText = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
