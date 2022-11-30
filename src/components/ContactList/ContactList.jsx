import { ContactItem } from './ContactItem/ContactItem';
import { ContactsList, Text } from './ContactList.styled';
import { selectContacts, selectFilterText } from 'Redux/selectors';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilterText);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );
  return contacts.length > 0 ? (
    <ContactsList>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contactItem => {
          return <ContactItem key={contactItem.id} contactItem={contactItem} />;
        })
      ) : (
        <li>
          <Text>no contacts were found for this request {filterText}</Text>
        </li>
      )}
    </ContactsList>
  ) : (
    <Text>Sorry, but you don't have contacts</Text>
  );
};
