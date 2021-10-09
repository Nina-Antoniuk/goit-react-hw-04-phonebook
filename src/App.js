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

  filtredNames = () => {
    return this.state.contacts.filter(contact => {
      if (
        contact.name
          .toLowerCase()
          .includes(this.state.filter.toLocaleLowerCase())
      ) {
        return contact;
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h2>Phonebook</h2>
          <Form onChange={this.inputChange} onSubmit={this.submit} />
        </div>

        <div className="wrapper">
          <h2>Contacts</h2>
          <Filter
            id={this.filterFieldId}
            value={this.state.filter}
            onChange={this.inputChange}
          />
          <Contacts names={this.filtredNames} />
        </div>
      </div>
    );
  }
}

export default App;
