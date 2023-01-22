import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout';
import { LoginPages } from 'pages/Login/Login';
import { ContactsPage } from 'pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPages />} />
          <Route path="contacts" element={<ContactsPage />} />
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
