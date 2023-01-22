import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFiltered = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltered],
  ({ items }, filter) => {
    return !filter
      ? items
      : items.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
