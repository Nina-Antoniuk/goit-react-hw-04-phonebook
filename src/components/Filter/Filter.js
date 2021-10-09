function Filter({ id, value, onChange }) {
  return (
    <>
      <label className="label" htmlFor={id}>
        Find contacts by name
      </label>

      <input
        id={id}
        className="input"
        name="filter"
        type="text"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Введите имя которое ищите"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Filter;
