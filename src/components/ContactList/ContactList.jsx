import { Contact } from './Contact';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = ({ title }) => {
  const contacts = useSelector(selectFilteredContacts);
  const reversedContacts = [...contacts].reverse();

  return (
    <>
      {reversedContacts.length > 0 && (
        <div>
          <h2 className="text-xl text-center font-semibold ">{title}</h2>
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
ContactList.propTypes = {
  title: PropTypes.string.isRequired,
};
