import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <li className={css.item} key={id}>
            {index + 1}. {name}: {number}
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
