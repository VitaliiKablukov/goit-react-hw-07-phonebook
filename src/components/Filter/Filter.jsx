import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'Redux/FilterContacts';
import { selectContacts } from 'Redux/selectors';

export const Filter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filterText = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    contacts.length > 0 && (
      <Fragment>
        <label htmlFor="filter">Find contacts by name</label>
        <input type="text" name="filter" onChange={filterText} />
      </Fragment>
    )
  );
};
