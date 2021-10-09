function ContactsListElement({ id, name, number, onClick }) {
  return (
    <li className="listItem" id={id} key={id}>
      <span className="name">{name}:</span> {number}
      <button className="deleteBtn" type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

export default ContactsListElement;
