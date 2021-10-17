import { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';

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
    const { props, state, reset } = this;

    props.onSubmit(state);
    reset();
  };

  reset = () => {
    return this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { submit, nameId, state, inputChange, numberId } = this;
    return (
      <form className="form" onSubmit={submit}>
        <label className="label" htmlFor={nameId}>
          Name
        </label>
        <input
          id={nameId}
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов.
            Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoComplete="off"
          value={state.name}
          onChange={inputChange}
        />

        <label className="label" htmlFor={numberId}>
          Number
        </label>
        <input
          id={numberId}
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, 
            круглые скобки и может начинаться с +"
          required
          autoComplete="off"
          value={state.number}
          onChange={inputChange}
        />

        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
