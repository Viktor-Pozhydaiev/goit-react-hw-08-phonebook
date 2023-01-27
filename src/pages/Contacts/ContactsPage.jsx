import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      {error && <div>Sorry, something went wrong....</div>}
      {contacts.length > 0 && !isLoading && <ContactList />}
    </div>
  );
}
