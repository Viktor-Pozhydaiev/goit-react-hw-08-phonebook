import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/Form/ContactForm';
import { VscChromeClose, VscAdd } from 'react-icons/vsc';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const [show, setShow] = useState(false);

  const showContactForm = () => setShow(true);
  const closeContactForm = () => setShow(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row items-center">
        <h2 className="text-green-500 text-2xl m-5">Contact</h2>
        {show === false && (
          <button
            className="bg-cyan-500"
            type="button"
            onClick={showContactForm}
          >
            <VscAdd />
          </button>
        )}
        {show === true && (
          <button
            className=" bg-red-500"
            type="button"
            onClick={closeContactForm}
          >
            <VscChromeClose />
          </button>
        )}
      </div>

      <div>{isLoading && 'Request in progress...'}</div>
      {error && <div>Sorry, something went wrong....</div>}
      {show && <ContactForm />}
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && !isLoading && <ContactList />}
    </div>
  );
}
