import { Button } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/operation';

export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = contactItem;

  return (
    <li key={id}>
      {name}: {phone}
      <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
        delete:{name}
      </Button>
    </li>
  );
};
