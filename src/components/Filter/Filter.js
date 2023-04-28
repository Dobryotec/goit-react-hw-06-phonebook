import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { useSelector } from 'react-redux';

function Filter({ onChange }) {
  const filter = useSelector(state => state.contacts.filter);

  const filterInputId = nanoid();

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        id={filterInputId}
        onChange={onChange}
        value={filter}
      />
    </div>
  );
}

export default Filter;
