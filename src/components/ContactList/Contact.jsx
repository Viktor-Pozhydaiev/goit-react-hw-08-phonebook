import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContacts } from 'redux/contacts/operations';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContacts(id));
    Notiflix.Notify.warning(`You deleted contact ${name}. `);
  };

  return (
    <li className="m-1">
      <span className="p-2 text-center text-xl text-violet-500 ">
        {name}: {number}
      </span>
      <button
        className="left-10 bg-cyan-500 m-1 "
        onClick={deleteContact}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
