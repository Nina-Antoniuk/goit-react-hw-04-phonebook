import ContactsListElement from '../ContactsListElement';

function Contacts({ names }) {
  return (
    <ul className="list">
      {names().map(el => {
        return (
          <ContactsListElement id={el.id} name={el.name} number={el.number} />
        );
      })}
    </ul>
  );
}
export default Contacts;
