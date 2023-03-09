import React, { Component } from 'react';
// import from libraries
import { Report } from 'notiflix';
// imports from files
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactsList';
// import

import { Container, Tittle, Subtittle } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  handleFilter = e => {
    const filter = e.currentTarget.value;

    this.setState({ filter: filter });
  };

  getContacts = contact => {
    const resultChecked = this.checkName(contact.name);

    if (resultChecked) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  getContactsFromForm = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  };

  checkName = newName => {
    if (this.state.contacts.some(({ name }) => name === newName)) {
      Report.warning(`${newName} is already in contacts`);
      return false;
    }

    return true;
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.getContactsFromForm();
    return (
      <Container>
        <Tittle>Phonebook </Tittle>
        <ContactForm onSubmit={this.getContacts} />
        <Subtittle>Contacts </Subtittle>
        <Filter value={filter} onFilter={this.handleFilter} />
        <ContactList
          renderItems={visibleFilter}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
