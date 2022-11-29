import { Label, Input, Form, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { addContacts } from 'Redux/ContactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value;

    const number = form.elements.number.value;

    if (contacts.some(el => el.name === name.toLowerCase())) {
      form.reset();
      return alert(`${name} is already contacts`);
    } else {
      dispatch(addContacts({name, number}));
      form.reset();
      return;
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number:</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
