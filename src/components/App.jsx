import React, { useEffect } from 'react';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Header } from './Header/Header';
import { LoginPages } from 'pages/Login/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ContactsPage } from 'pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPages />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
    // <Section title="Phone book">
    //   <ContactForm />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList title="Contacts" />
    // </Section>
  );
};
cl