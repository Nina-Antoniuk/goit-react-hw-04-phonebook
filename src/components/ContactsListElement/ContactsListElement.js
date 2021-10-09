function ContactsListElement(props) {
  return (
    <li className="listItem" key={props.id}>
      {/* {console.log(props.id)} // uniqe key */}
      <span className="name">{props.name}:</span> {props.number}
      <button className="deleteBtn" type="button">
        Delete
      </button>
    </li>
  );
}

export default ContactsListElement;
