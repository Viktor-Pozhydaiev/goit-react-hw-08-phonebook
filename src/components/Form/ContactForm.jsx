import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
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
        Notiflix.Notify.warning('You wrote something wrong, please try again!');
    }
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already  in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      toast.error(`Contact number ${number} is already  in contacts.`);
    } else {
      dispatch(addContacts({ name: name, number: number }));
      toast.success(`You added new contact ${name}. `);
    }
    setName('');
    setNumber('');
  };
  return (
    <>
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
    </>
  );
};
