function ContactsListElement(props) {
  return (
    <li className="list-item" key={props.id}>
      <span className="name">{props.name}:</span> {props.number}
      <button className="deleteBtn" type="button">
        Delete
      </button>
    </li>
  );
}

export default ContactsListElement;
