function Filter(props) {
  return (
    <>
      <label className="label" htmlFor={props.id}>
        Find contacts by name
      </label>

      <input
        id={props.id}
        className="input"
        name="filter"
        type="text"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Введите имя которое ищите"
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default Filter;
