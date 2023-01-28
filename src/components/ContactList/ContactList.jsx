import { Contact } from './Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const reversedContacts = [...contacts].reverse();

  return (
    <>
      {reversedContacts.length > 0 && (
        <div>
          <ul className="flex flex-col  p-0 items-baseline">
            {reversedContacts.map(({ id, number, name }) => (
              <Contact key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
