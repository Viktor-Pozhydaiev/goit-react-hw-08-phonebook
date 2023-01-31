import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import { selectFiltered } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFiltered);

  return (
    <label className="m-2">
      <p>Find contacts by name</p>
      <input
        className="border-2 border-green-700"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(contactsFilter(e.currentTarget.value))}
      />
    </label>
  );
};
