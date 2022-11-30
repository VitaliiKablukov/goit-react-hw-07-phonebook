import { Button } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operation';

export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = contactItem;

  return (
    <li key={id}>
      {name}: {phone}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        delete:{name}
      </Button>
    </li>
  );
};
