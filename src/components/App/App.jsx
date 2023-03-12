import { useState, useEffect } from 'react';
// import from libraries
import { Report } from 'notiflix';
// imports from files
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactsList';
// import

import { Container, Tittle, Subtittle } from './App.styled';

const KEY_CONTACTS = 'name/tell';

const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem(KEY_CONTACTS) || [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = contact => {
    const isContainName = checkName(contact.name);

    isContainName && setContacts(state => [...state, contact]);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };

  const checkName = newName => {
    if (contacts.some(({ name }) => name === newName)) {
      Report.warning(`${newName} is already in contacts`);
      return false;
    }
    return true;
  };

  return (
    <Container>
      <Tittle>Phonebook</Tittle>
      <ContactForm onSubmit={onSubmitForm} />
      <Subtittle>Contacts</Subtittle>
      <Filter value={filter} toFilter={handleFilter} />
      <ContactList
        renderItems={FilteredContacts(contacts, filter)}
        deleteContact={deleteContact}
      />
    </Container>
  );
};

const FilteredContacts = (contacts, filter) => {
  const normalizzedFilter = filter.toLowerCase();

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizzedFilter) ||
      number.includes(normalizzedFilter)
  );
};

export default App;
