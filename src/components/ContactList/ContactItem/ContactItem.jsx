import { Button } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/ContactsSlice';

export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contactItem;

  return (
    <li key={id}>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
        delete:{name}
      </Button>
    </li>
  );
};
