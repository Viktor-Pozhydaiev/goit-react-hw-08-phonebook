import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout';
import { LoginPage } from 'pages/Login/LoginPage';
import { ContactsPage } from 'pages/Contacts/ContactsPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUse());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
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
    </>
    // <Section title="Phone book">
    //   <ContactForm />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList title="Contacts" />
    // </Section>
  );
};
