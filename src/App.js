import { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

class App extends Component {
  filterFieldId = uuidv1();

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submit = obj => {
    const existingContact = this.state.contacts.find(contact => {
      return contact.name === obj.name;
    });

    if (existingContact) {
      return alert(`${obj.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [
        {
          id: uuidv1(),
          ...obj,
        },
        ...prevState.contacts,
      ],
    }));
  };

  contactsFiltering = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(filter.toLocaleLowerCase())) {
        return contact;
      }
    });
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== e.target.parentNode.id;
      }),
    }));
  };

  render() {
    const {
      inputChange,
      submit,
      filterFieldId,
      state,
      contactsFiltering,
      deleteContact,
    } = this;

    return (
      <div className="App">
        <div className="wrapper">
          <h2>Phonebook</h2>
          <Form onSubmit={submit} />
        </div>

        <div className="wrapper">
          <h2>Contacts</h2>
          <Filter
            id={filterFieldId}
            value={state.filter}
            onChange={inputChange}
          />
          <Contacts names={contactsFiltering} onClick={deleteContact} />
        </div>
      </div>
    );
  }
}

export default App;
