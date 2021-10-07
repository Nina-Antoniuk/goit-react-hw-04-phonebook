import s from './Button.module.css';

function Button() {
  return (
    <button type="button" className={s.btn}>
      Click!
    </button>
  );
}

export default Button;
