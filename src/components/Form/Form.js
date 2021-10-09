import { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

class Form extends Component {
  nameId = uuidv1();
  numberId = uuidv1();

  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    return this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submit}>
        <label className="label" htmlFor={this.nameId}>
          Name
        </label>
        <input
          id={this.nameId}
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов.
            Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoComplete="off"
          value={this.state.name}
          onChange={this.inputChange}
        />

        <label className="label" htmlFor={this.numberId}>
          Number
        </label>
        <input
          id={this.numberId}
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, 
            круглые скобки и может начинаться с +"
          required
          autoComplete="off"
          value={this.state.number}
          onChange={this.inputChange}
        />

        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
