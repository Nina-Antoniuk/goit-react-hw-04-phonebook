import ContactsListElement from '../ContactsListElement';

function Contacts({ names }) {
  return (
    <ul className="list">
      {names().map(el => {
        return (
          <ContactsListElement id={el.id} name={el.name} number={el.number} />
          // <li className="listItem" key={el.id}>
          //   <span className="name">{el.name}:</span> {el.number}
          //   <button className="deleteBtn" type="button">
          //     Delete
          //   </button>
          // </li>
        );
      })}
    </ul>
  );
}
export default Contacts;
