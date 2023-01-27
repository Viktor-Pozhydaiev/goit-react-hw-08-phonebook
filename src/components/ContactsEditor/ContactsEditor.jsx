import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        Notiflix.Notify.warn('You write something wrong, please try again !!!');
    }
  };

  const handelSubmit = event => {
    event.preventDefault();

    const { name, number } = event.target;

    const form = event.target;
    const contactName = name.value;
    const contactNumber = number.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${contactName} is already  in contacts.`);
      form.reset();
      return;
    } else if (contacts.find(contact => contact.number === contactNumber)) {
      Notiflix.Notify.failure(
        `Contact number ${contactNumber} is already  in contacts.`
      );
      form.reset();
    } else {
      dispatch(addContacts({ name: contactName, number: contactNumber }));
      Notiflix.Notify.success(`You added new contact ${contactName}. `);
    }
    setNumber('');
    setName('');
    form.reset();
  };

  return (
    <div>
      <form
        className="flex flex-col p-10 border-2 border-rose-600"
        onSubmit={handelSubmit}
      >
        <p className="text-center"> Name</p>
        <input
          className="border-2 border-green-600"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id="name"
          value={name}
          onChange={handelChange}
          placeholder="Enter name.."
          required
        />
        <p className="text-center">Phone</p>
        <input
          className="border-2 border-green-600"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number.."
          value={number}
          onChange={handelChange}
          id="number"
          required
        />
        <button className="bg-green-500 mt-2 text-base " type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
