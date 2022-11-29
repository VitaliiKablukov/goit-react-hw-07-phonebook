import { ContactItem } from './ContactItem/ContactItem';
import { ContactsList, Text } from './ContactList.styled';
import { getContacts, getFilterText } from 'Redux/selectors';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterText = useSelector(getFilterText);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterText)
  );
  return contacts.length > 0 ? (
    <ContactsList>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contactItem => {
          return <ContactItem contactItem={contactItem} />;
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
