import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filtredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  return (
    <ul className={css.list}>
      {filtredContacts().map(({ id, name, number }, index) => {
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
