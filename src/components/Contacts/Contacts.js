import ContactsListElement from '../ContactsListElement';

function Contacts({ names, onClick }) {
  return (
    <ul className="list">
      {names().map(el => {
        return (
          <ContactsListElement
            id={el.id}
            name={el.name}
            number={el.number}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
}
export default Contacts;
