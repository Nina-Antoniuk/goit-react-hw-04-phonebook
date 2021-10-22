import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('oops');
    }
  };

  const submit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={submit}>
      <label className="label" htmlFor="nameId">
        Name
      </label>
      <input
        id="nameId"
        className="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов.
          Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        value={name}
        onChange={inputChange}
      />
      <label className="label" htmlFor="numberId">
        Number
      </label>
      <input
        id="numberId"
        className="input"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, 
          круглые скобки и может начинаться с +"
        required
        autoComplete="off"
        value={number}
        onChange={inputChange}
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
