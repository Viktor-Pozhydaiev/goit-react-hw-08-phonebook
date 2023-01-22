import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const filterStr = event.target.value;
    console.log(filterStr);
    dispatch(contactsFilter(filterStr));
  };
  return (
    <label className="m-2">
      <p>Find contacts by name</p>
      <input
        className="border-2 border-green-700"
        type="text"
        onChange={handleFilterInput}
      />
    </label>
  );
};
