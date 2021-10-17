import PropTypes from 'prop-types';

function ContactsListElement({ id, name, number, onClick }) {
  return (
    <li className="listItem" id={id}>
      <span className="name">{name}:</span> {number}
      <button className="deleteBtn" type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

ContactsListElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactsListElement;
